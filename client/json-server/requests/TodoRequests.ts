import express = require('express');
import {TodoSchema} from "../models/TodoSchema";

export interface GetTodoRequest extends express.Request {
    params: {
        userEmail: string,
    }
}

export interface AddTodoRequest extends express.Request {
    body: {
        todo: Omit<TodoSchema, 'id' | 'author'>,
        author: {
            email: string,
            token: string,
        }
    }
}

export interface DeleteTodoRequest extends express.Request {
}

export interface UpdateTodoRequest extends express.Request {
    body: Omit<TodoSchema, 'author' | 'id'>
}