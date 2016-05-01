export interface Todo {
    id?: number;
    text?: string;
    completed?: boolean;
}

let todoId = 1;

export class TodoService {
    todos: Todo[] = [];

    addTodo(todo:Todo) {
        todo.id = todoId++;
        this.todos = this.todos.concat(todo);
    }

    getTodoById(id:number) {
        return this.todos.filter(todo => todo.id === id).pop();
    }
}