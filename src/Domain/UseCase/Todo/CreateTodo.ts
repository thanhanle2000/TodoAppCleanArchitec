import { Todo } from "src/Domain/Model/Todo";
import { TodoRepository } from "src/Domain/Repository/TodoRepository";

export interface CreateTodoUseCase {
  invoke: (value: string) => Promise<Todo>;
}

export class CreateTodo implements CreateTodoUseCase {
  private todoRepo: TodoRepository;

  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(value: string) {
    if (value.length < 2)
      throw new Error("Your todo should have at leat 2 characters.");

    return this.todoRepo.createTodo(value);
  }
}
