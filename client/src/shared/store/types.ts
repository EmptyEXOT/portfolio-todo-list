import {TodoListSchema} from "@/entities/Todo/model/types";
import {AddTodoModel} from "@/features/AddTodo/model/types";
import {EditTodoModel} from "@/features/EditTodoById/model/types";
import {LoginModel} from "@/features/LoginByEmail/model/types";

export interface StateSchema {
    todos: TodoListSchema,
    newTodo: AddTodoModel,
    editTodo: EditTodoModel,
    login: LoginModel,
}