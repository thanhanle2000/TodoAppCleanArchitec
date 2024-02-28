import { useEffect } from "react";
import useViewModel from "./TodoViewModel";
import TodoList from "./TodoList";

function TodoPage() {
  const { handleGetTodos, handleCreateTodo, handleChangeValue, value } =
    useViewModel();

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <div>
        <input
          type="text"
          className="border-1 h-[20px] w-[200px] text-sm"
          placeholder="Add 1 todo..."
          value={value}
          onChange={handleChangeValue}
        />
        <button
          className="h-[27px] ml-[5px] bg-blue-600"
          onClick={handleCreateTodo}
        >
          Add
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default TodoPage;
