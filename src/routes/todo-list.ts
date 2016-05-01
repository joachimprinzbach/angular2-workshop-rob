import {Component, Input} from 'angular2/core';
import {TodoService, Todo} from "../services/todos";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'listing-todo',
    template: `
        <ul>
            <li *ngFor="#todo of todos" [class.completed]="todo.completed">
                <input type="checkbox" [(ngModel)]="todo.completed">
                <a [routerLink]="['TodoDetail', {id: todo.id}]">{{todo.text}}</a>
            </li>
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [
        `
            .completed {
                text-decoration: line-through;
            }   
        `
    ]
})
class ListingTodo {
    @Input() todos: Todo[];
}

@Component({
    selector: 'todo-list',
    template: `
         <h1>Hello 1</h1>
         <listing-todo [todos]="todoService.todos"></listing-todo>
    `,
    directives: [ListingTodo],
    providers: []
})
export class TodoList {
    constructor(public todoService: TodoService) {

    }
}