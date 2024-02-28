import { memo } from "react";
import { Todo } from "src/Domain/Model/Todo";

interface Props {
  todos: Todo[];
  handleUpdateTodo: (todo: Todo) => void;
  handleRemoveTodo: (id: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
const TodoList = ({ todos, handleUpdateTodo, handleRemoveTodo }: Props) => {
  return (
    <ul>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-row justify-start items-center list-none"
        >
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={(value) =>
              handleUpdateTodo({ ...todo, isComplete: value.target.checked })
            }
          />
          <input
            type="text"
            value={todo.title}
            onChange={(value) =>
              handleUpdateTodo({ ...todo, title: value.target.value })
            }
            disabled={todo.isComplete}
            className={`${
              todo.isComplete ? "line-through" : ""
            } text-black text-lg`}
          />
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TodoList);
