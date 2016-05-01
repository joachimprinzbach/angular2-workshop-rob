import {Component} from 'angular2/core';
import {TodoDetail, TodoList, NewTodo} from "./routes/index";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "angular2/router";
import {TodoService} from "./services/todos";

@Component({
    selector: 'todo-app',
    template: `
         <h1>Hello Todos</h1>
         <div>
            <a [routerLink]="['TodoList']">Todos</a>
            <a [routerLink]="['NewTodo']">New Todo</a>
         </div>
         <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TodoService]
})
@RouteConfig([
    {name: 'TodoList', path: '/todos', component: TodoList, useAsDefault:true},
    {name: 'NewTodo', path: '/new', component: NewTodo},
    {name: 'TodoDetail', path: '/todos/:id', component: TodoDetail}
])
export class App {


}