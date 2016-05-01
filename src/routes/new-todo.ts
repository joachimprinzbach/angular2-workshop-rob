import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoService, Todo} from "../services/todos";

@Component({
    selector: 'new-todo-input',
    template: `
    <div>
        <input type="text" [(ngModel)]="newTodo.text">
        <button (click)="saveTodo()">Save</button>
    </div>
    `
})
class NewTodoInput {
    newTodo: Todo = {};
    @Output() create: EventEmitter<any> = new EventEmitter();

    saveTodo() {
        this.newTodo.completed = false;
        this.create.emit(this.newTodo);
        this.newTodo = {};
    }
}

@Component({
    selector: 'new-todo',
    template: `
         <h1>Hello 2</h1>
         <new-todo-input (create)="addTodoToService($event)"></new-todo-input>
    `,
    directives: [NewTodoInput],
    providers: []
})
export class NewTodo {
    constructor(public todoService: TodoService) {
    }

    addTodoToService(newTodo) {
        this.todoService.addTodo(newTodo);
    }

}