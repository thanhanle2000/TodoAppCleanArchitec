import { useCallback, useState } from "react";
import { Todo } from "src/Domain/Model/Todo";
import {
  useAppDispatch,
  useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import {
  createTodo,
  removeTodo,
  updateTodo,
} from "src/Data/DataSource/Api/LocalDB/Slices/TodoSlice";

export default function TodoViewModel() {
  // STATE
  const [value, setValue] = useState("");

  // HOOK
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  // RESET VALUE
  const resetValue = () => setValue("");

  /* -------------- ACTIONS -------------- */
  const handleGetTodos = (): Todo[] => {
    return todos;
  };

  const handleCreateTodo = useCallback(() => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title: value,
      isComplete: false,
    };

    dispatch(createTodo(newTodo));
  }, [dispatch, value]);

  const handleUpdateTodo = useCallback(
    (todo: Todo) => {
      dispatch(updateTodo(todo));
    },
    [dispatch]
  );

  const handleRemoveTodo = useCallback(
    (id: string) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  /* -------------- ACTIONS -------------- */

  return {
    handleGetTodos,
    handleCreateTodo,
    handleUpdateTodo,
    handleRemoveTodo,
    resetValue,
    handleChangeValue,
    todos,
    value,
  };
}
