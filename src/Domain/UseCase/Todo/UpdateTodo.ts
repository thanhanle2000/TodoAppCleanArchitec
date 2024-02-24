import { Todo } from "../../Model/Todo";
import { TodoRepository } from "../../Repository/TodoRepository";

export interface UpdateTodoUseCase {
  invoke: (todo: Todo) => Promise<Todo>;
}

export class UpdateTodo implements UpdateTodoUseCase {
  private todoRepo: TodoRepository;

  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(todo: Todo) {
    if (todo.title.length < 2) {
      throw new Error("Your todo should have at leat 2 characters.");
    }
    const updated = this.todoRepo.updateTodo(todo);
    return updated;
  }
}
