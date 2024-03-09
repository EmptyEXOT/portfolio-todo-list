import {createAsyncThunk} from "@reduxjs/toolkit";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";

interface CreateTodoPayload {
    title: string,
    description: string,
}

export const addTodoService = createAsyncThunk<TodoModel, CreateTodoPayload, ThunkConfig<TodoListError>>(
    'todo/add',
    async (data, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<TodoModel>('/todos', data)
            if (!response.data) {
                throw new Error('Login Error')
            } else {
                thunkAPI.dispatch(fetchAllTodosService())

                return response.data
            }
        } catch (e: any) {
            return thunkAPI.rejectWithValue({message: 'creating error', statusCode: 404});
        }
    }
)