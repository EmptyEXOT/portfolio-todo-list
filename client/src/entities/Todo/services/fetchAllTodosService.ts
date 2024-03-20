import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";
import {LS} from "@/shared/const/localStorage";

type TodosResponse = TodoModel[]

export const fetchAllTodosService = createAsyncThunk<TodosResponse, void, ThunkConfig<TodoListError>>(
    'todo/get',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem(LS.token);
            const userEmail = localStorage.getItem(LS.email)

            const response = await thunkAPI.extra.api.get<TodosResponse>(`/todos/${userEmail}`, {headers: {Authorization: `Bearer ${token}`}, params: {userEmail}})
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