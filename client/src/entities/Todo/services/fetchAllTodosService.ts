import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";

type TodosResponse = TodoModel[]

export const fetchAllTodosService = createAsyncThunk<TodosResponse, void, ThunkConfig<TodoListError>>(
    'todo/get',
    async (_, thunkAPI)=> {
        try {
            const response = await thunkAPI.extra.api.get<TodosResponse>('/todos')
            if (!response.data) {
                throw new Error('Login Error')
            } else {
                return response.data
            }
        } catch (e: any) {
            return e.message
        }
    }
)