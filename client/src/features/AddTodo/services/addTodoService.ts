import {createAsyncThunk} from "@reduxjs/toolkit";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";
import {LS} from "@/shared/const/localStorage";

interface CreateTodoPayload {
    title: string,
    description: string,
}

export const addTodoService = createAsyncThunk<TodoModel, CreateTodoPayload, ThunkConfig<TodoListError>>(
    'todo/add',
    async (data, thunkAPI) => {
        try {
            const token = localStorage.getItem(LS.token);
            const email = localStorage.getItem(LS.email);
            const payload = {
                todo: {
                    title: data.title,
                    description: data.description,
                },
                author: {
                    email,
                    token,
                }
            }

            const response = await thunkAPI.extra.api.post<TodoModel>('/todos', payload, {headers: {Authorization: `Bearer ${token}`}})
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