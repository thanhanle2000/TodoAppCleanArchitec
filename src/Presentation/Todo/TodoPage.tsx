import { useEffect } from "react";
import useViewModel from "./TodoViewModel";
import TodoList from "./TodoList";

function TodoPage() {
  const {
    handleGetTodos,
    handleCreateTodo,
    handleRemoveTodo,
    handleUpdateTodo,
    todos,
    value,
    handleChangeValue,
  } = useViewModel();

  useEffect(() => {
    (async () => {
      handleGetTodos();
    })();
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <div>
        <input
          type="text"
          className="text-lg"
          placeholder="Add 1 Todo"
          value={value}
          onChange={handleChangeValue}
        />
        <button onClick={handleCreateTodo}>Add</button>
      </div>
      <hr />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default TodoPage;
