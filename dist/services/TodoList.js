var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LogAddition } from "../decorators/logAddition.js";
export class TodoList {
    items = new Map();
    addItem({ item }) {
        this.items.set(item.id, item);
        console.log(`Item added: ${item.id}`);
    }
    deleteItem(id) {
        this.items.delete(id);
        console.log(`Item deleted: ${id}`);
    }
    listItems() {
        this.items.forEach((item) => {
            console.log(`Item ID: ${item.id}, Content: ${JSON.stringify(item.content)}`);
        });
    }
}
__decorate([
    LogAddition,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoList.prototype, "addItem", null);
