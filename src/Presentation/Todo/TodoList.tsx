import { memo } from "react";
import { Todo } from "src/Domain/Model/Todo";

function TodoList({
  todos,
  handleUpdateTodo,
  handleRemoveTodo,
}: {
  todos: Todo[];
  handleUpdateTodo: (todo: Todo) => void;
  handleRemoveTodo: (id: string) => void;
}) {
  console.log("list rerender");

  return (
    <ul className="">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-row justify-start items-center list-none"
        >
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={(e) => {
              handleUpdateTodo({ ...todo, isComplete: e.target.checked });
            }}
          />
          <input
            type="text"
            value={todo.title}
            onChange={(e) => {
              handleUpdateTodo({ ...todo, title: e.target.value });
            }}
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
}

export default memo(TodoList);
