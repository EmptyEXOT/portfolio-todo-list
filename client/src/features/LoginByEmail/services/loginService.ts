import {createAsyncThunk} from "@reduxjs/toolkit";
import {TodoListError, TodoModel} from "@/entities/Todo/model/types";
import {ThunkConfig} from "@/shared/store/store";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";
import {LoginError} from "@/features/LoginByEmail/model/types";
import {redirect, useNavigate} from "react-router-dom";

interface LoginPayload {
    loginInfo: {
        email: string,
        password: string,
    }
    navigate: (path: string) => void
}

interface LoginResponse {
    id: number,
    username: string,
    password: string,
    email: string,
}

export const loginService = createAsyncThunk<LoginResponse, LoginPayload, ThunkConfig<LoginError>>(
    'auth/login',
    async (userLoginInfo, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<LoginResponse>(`/login`, userLoginInfo.loginInfo)
            if (!response.data) {
                throw new Error('Login Error')
            } else {
                localStorage.setItem('token', String(response.data.id))
                localStorage.setItem('username', String(response.data.username))
                localStorage.setItem('email', String(response.data.email))
                userLoginInfo.navigate('/app')
                return response.data
            }
        } catch (e: any) {
            return thunkAPI.rejectWithValue({message: 'login error', status: 404});
        }
    }
)