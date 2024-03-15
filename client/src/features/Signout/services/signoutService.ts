import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/shared/store/store";
import {LoginError} from "@/features/LoginByEmail/model/types";

interface SignoutPayload {
    signOutBody: {
        email: string,
        token: string,
    },
    navigate: (path: string) => void
}

interface SignoutError {
    message: string,
    status: number,
}

interface SignoutResponse {
}

export const signoutService = createAsyncThunk<SignoutResponse, SignoutPayload, ThunkConfig<SignoutError>>(
    'auth/signout',
    async (userSignoutInfo, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await thunkAPI.extra.api.post<SignoutResponse>(`/signout`, userSignoutInfo.signOutBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (!response.data) {
                throw new Error('Login Error')
            } else {
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                localStorage.removeItem('email')
                userSignoutInfo.navigate('/login')
                return response.data
            }
        } catch (e: any) {
            return thunkAPI.rejectWithValue({message: 'login error', status: 404});
        }
    }
)