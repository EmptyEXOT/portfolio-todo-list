import express = require('express');
import {TodoSchema} from "../models/TodoSchema";

export interface GetTodoRequest extends express.Request {

}

export interface AddTodoRequest extends express.Request {
    body: Omit<TodoSchema, 'id' | 'author'>
}

export interface DeleteTodoRequest extends express.Request {
}

export interface UpdateTodoRequest extends express.Request {
    body: Omit<TodoSchema, 'author' | 'id'>
}