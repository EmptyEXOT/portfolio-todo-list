import {TodoListSchema} from "@/entities/Todo/model/types";
import {AddTodoModel} from "@/features/AddTodo/model/types";

export interface StateSchema {
    todos: TodoListSchema,
    newTodo: AddTodoModel,
}