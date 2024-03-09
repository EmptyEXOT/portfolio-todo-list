import {EntityState} from "@reduxjs/toolkit";

export interface TodoListSchema extends EntityState<TodoModel, number> {
    error: TodoListError | null,
    isLoading: boolean,
    
}

export interface TodoModel {
    id: number,
    isFinished: boolean,
    title: string,
    description: string,
}

export interface TodoListError {
    statusCode: number,
    message: string,
}