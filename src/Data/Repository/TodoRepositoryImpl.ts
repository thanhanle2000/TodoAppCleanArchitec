import { Todo } from "../../Domain/Model/Todo";
import { TodoRepository } from "../../Domain/Repository/TodoRepository";
import TodoDataSource from "../DataSource/TodoDatasource";

export class TodoRepositoryImpl implements TodoRepository {
  dataSource: TodoDataSource;

  constructor(_dataSource: TodoDataSource) {
    this.dataSource = _dataSource;
  }

  getTodos(): Promise<Todo[]> {
    return this.dataSource.getTodos();
  }
  createTodo(value: string): Promise<Todo> {
    return this.dataSource.createTodo(value);
  }
  updateTodo(todo: Todo): Promise<Todo> {
    return this.dataSource.updateTodo(todo);
  }
  removeTodo(id: string): Promise<string> {
    return this.dataSource.removeTodo(id);
  }
}
