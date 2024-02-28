import { TodoRepository } from "../../Repository/TodoRepository";

export interface RemoveTodoUseCase {
  invoke: (id: string) => Promise<string>;
}

export class RemoveTodo implements RemoveTodoUseCase {
  private todoRepo: TodoRepository;

  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(id: string) {
    return this.todoRepo.removeTodo(id);
  }
}
