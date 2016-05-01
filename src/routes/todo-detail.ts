import {Component} from 'angular2/core';
import {TodoService, Todo} from "../services/todos";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'todo-detail',
    template: `
         <h1>Todo Detail</h1>
         <h3>{{todo.text}}</h3>
    `,
    directives: [],
    providers: []
})
export class TodoDetail {
    todo: Todo;
    constructor(public todoService: TodoService, routeParams:RouteParams) {
        this.todo = todoService.getTodoById(parseInt(routeParams.get('id'), 10));
    }

}