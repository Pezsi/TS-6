import { LogAddition } from "../decorators/logAddition.js";
import { TodoItem } from "../models/todoItem.js";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>> = new Map();

  @LogAddition
  addItem({ item }: { item: TodoItem<T>; }): void {
    this.items.set(item.id, item);
    console.log(`Item added: ${item.id}`);
  }

  deleteItem(id: number): void {
    this.items.delete(id);
    console.log(`Item deleted: ${id}`);
  }

  listItems(): void {
    this.items.forEach((item) => {
      console.log(`Item ID: ${item.id}, Content: ${JSON.stringify(item.content)}`);
    });
  }
}
