import {UserSchema} from "../types";
import {TodoSchema} from "./TodoSchema";
import {CommentSchema} from "./CommentSchema";

export type DatabaseSchema = {
    todos: TodoSchema[],
    comments: CommentSchema[],
    users: UserSchema[]
}