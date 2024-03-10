import {TodoListSchema} from "@/entities/Todo/model/types";
import {AddTodoModel} from "@/features/AddTodo/model/types";
import {EditTodoModel} from "@/features/EditTodoById/model/types";

export interface StateSchema {
    todos: TodoListSchema,
    newTodo: AddTodoModel,
    editTodo: EditTodoModel,
}