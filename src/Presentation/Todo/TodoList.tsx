import { memo } from "react";
import useViewModel from "./TodoViewModel";

// eslint-disable-next-line react-refresh/only-export-components
const TodoList = () => {
  const { handleRemoveTodo, handleUpdateTodo, todos } = useViewModel();
  return (
    <ul>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-row justify-start items-center list-none mt-[10px]"
        >
          <input
            type="checkbox"
            checked={todo?.isComplete}
            onChange={(value) =>
              handleUpdateTodo({ ...todo, isComplete: value?.target?.checked })
            }
          />
          <input
            type="text"
            value={todo.title}
            onChange={(value) =>
              handleUpdateTodo({ ...todo, title: value?.target?.value })
            }
            disabled={todo?.isComplete}
            className={`${
              todo?.isComplete ? "line-through" : ""
            } text-black text-sm border-1 h-[20px] w-[200px`}
          />
          <button
            className="h-[27px] ml-[5px] bg-red-500"
            onClick={() => handleRemoveTodo(todo.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TodoList);
