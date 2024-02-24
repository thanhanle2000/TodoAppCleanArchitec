import { Todo } from "../Model/Todo";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  createTodo(value: string): Promise<Todo>;
  updateTodo(todo: Todo): Promise<Todo>;
  removeTodo(id: string): Promise<string>;
}
