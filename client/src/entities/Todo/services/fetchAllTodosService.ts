import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";

type TodosResponse = TodoModel[]

export const fetchAllTodosService = createAsyncThunk<TodosResponse, void, ThunkConfig<TodoListError>>(
    'todo/get',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await thunkAPI.extra.api.get<TodosResponse>('/todos', {headers: {Authorization: `Bearer ${token}`}})
            if (!response.data) {
                throw new Error('todos error')
            } else {
                return response.data
            }
        } catch (e) {
            return thunkAPI.rejectWithValue({message: e.message, statusCode: e.statusCode})
        }
    }
)