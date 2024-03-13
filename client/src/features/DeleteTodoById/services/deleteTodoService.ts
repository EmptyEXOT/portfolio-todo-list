import {createAsyncThunk} from "@reduxjs/toolkit";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";

interface DeleteTodoPayload {
    id: number,
}

export const deleteTodoService = createAsyncThunk<TodoModel, number, ThunkConfig<TodoListError>>(
    'todo/delete',
    async (id, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await thunkAPI.extra.api.delete<TodoModel>(`/todos/${id}`, {headers: {Authorization: `Bearer ${token}`}})
            if (!response.data) {
                throw new Error('Delete Error')
            } else {
                thunkAPI.dispatch(fetchAllTodosService())

                return response.data
            }
        } catch (e: any) {
            return thunkAPI.rejectWithValue({message: 'delete error', statusCode: 404});
        }
    }
)