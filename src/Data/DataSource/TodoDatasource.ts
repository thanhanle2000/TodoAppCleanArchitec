import { Todo } from "../../Domain/Model/Todo";

export default interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
  createTodo(value: string): Promise<Todo>;
  updateTodo(todo: Todo): Promise<Todo>;
  removeTodo(id: string): Promise<string>;
}
