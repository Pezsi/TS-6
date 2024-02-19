
import "./decorators/logAddition";
import { TodoItem } from "./models/todoItem.js";
import { TodoList } from "./services/TodoList.js";

const todoList = new TodoList<string | { message: string; dueDate: Date }>();

// Példa teendők hozzáadása
todoList.addItem({ item: new TodoItem(1, "Bevásárlás") });
todoList.addItem({ item: new TodoItem(2, { message: "Orvoshoz menni", dueDate: new Date(2024, 1, 20) }) });

// Teendők listázása (implementációja a TodoList osztályban)
todoList.listItems();
