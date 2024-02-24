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
// import { GetTodos } from "../../../Domain/UseCase/Todo/GetTodos";
// import { TodoRepositoryImpl } from "../../../Data/Repository/TodoRepositoryImpl";
// import { CreateTodo } from "../../../Domain/UseCase/Todo/CreateTodo";
// import { UpdateTodo } from "../../../Domain/UseCase/Todo/UpdateTodo";
// import { RemoveTodo } from "../../../Domain/UseCase/Todo/RemoveTodo";
// import { TodoAPIDataSourceImpl } from "../../../Data/DataSource/Api/TodoAPIDataSourceImpl";

export default function TodoViewModel() {
  // const todosDataSourceImpl = new TodoAPIDataSourceImpl();
  // const todosRepositoryImpl = new TodoRepositoryImpl(todosDataSourceImpl);

  // const getTodosUseCase = new GetTodos(todosRepositoryImpl);
  // const createTodoUseCase = new CreateTodo(todosRepositoryImpl);
  // const updateTodoUseCase = new UpdateTodo(todosRepositoryImpl);
  // const removeTodoUseCase = new RemoveTodo(todosRepositoryImpl);

  const [value, setValue] = useState("");
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  // ui actions
  const resetValue = () => {
    setValue("");
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // actions
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
      console.log("updatetodo", todo);

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

  /*actions if we are calling api

  const getTodos = async () => {
    try {
      const todosFromStorage = await getTodosUseCase.invoke();
      setTodos(todosFromStorage);
    } catch (error) {
      console.log(error);
    }
  };

  const createTodo = async () => {
    try {
      const createdTodo = await createTodoUseCase.invoke(value);
      setTodos((prev) => [...prev, createdTodo]);
      resetValue();
    } catch (error) {
      resetValue();
    }
  };

  const updateTodo = async (todo: Todo) => {
    try {
      const updatedTodo = await updateTodoUseCase.invoke(todo);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      const idRemoved = await removeTodoUseCase.invoke(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== idRemoved));
    } catch (error) {
      console.log(error);
    }
  };
*/
  return {
    handleGetTodos,
    handleCreateTodo,
    handleUpdateTodo,
    handleRemoveTodo,
    todos,
    value,
    resetValue,
    handleChangeValue,
  };
}
