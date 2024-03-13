import {createAsyncThunk} from "@reduxjs/toolkit";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";

interface EditTodoPayload {
    id: number,
    title: string,
    description: string,
}

export const editTodoService = createAsyncThunk<TodoModel, EditTodoPayload, ThunkConfig<TodoListError>>(
    'todo/edit',
    async (data, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await thunkAPI.extra.api.put<TodoModel>(`/todos/${data.id}`,
                {title: data.title, description: data.description},
                {headers: {Authorization: `Bearer ${token}`}}
            )
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