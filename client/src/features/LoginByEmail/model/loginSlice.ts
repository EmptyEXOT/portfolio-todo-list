import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginModel} from "./types";
import {loginService} from "@/features/LoginByEmail/services/loginService";
import {redirect, useNavigate} from "react-router-dom";

const initialState: LoginModel = {
    email: '',
    password: '',
    isLoading: false,
    errors: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginService.pending, (state, action) => {
                state.errors = null;
                state.isLoading = true;
            })
            .addCase(loginService.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginService.rejected, (state, action) => {
                //@ts-ignore
                state.errors = action.payload
            })
    }
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice