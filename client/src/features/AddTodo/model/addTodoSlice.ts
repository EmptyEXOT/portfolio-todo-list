import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addTodoService} from "@/features/AddTodo/services/addTodoService";
import {AddTodoModel} from "@/features/AddTodo/model/types";

const initialState: AddTodoModel = {
    id: 0,
    title: '',
    description: '',
    errors: null,
    isLoading: false,
}

const addTodoSlice = createSlice({
    name: 'addTodo',
    initialState,
    reducers: {
        setHeader: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        reset: (state) => {
            state.description = '';
            state.title = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodoService.pending, (state, action) => {
                state.errors = null;
                state.isLoading = true;
            })
            .addCase(addTodoService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.title = '';
                state.description = ''
            })
            .addCase(addTodoService.rejected, (state, action) => {
                //@ts-ignore
                state.errors = action.payload
            })
    }
})

export const {actions: addTodoActions} = addTodoSlice
export const {reducer: addTodoReducer} = addTodoSlice