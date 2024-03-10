import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addTodoService} from "@/features/AddTodo/services/addTodoService";
import {AddTodoModel} from "@/features/AddTodo/model/types";
import {EditTodoError, EditTodoModel} from "@/features/EditTodoById/model/types";

const initialState: EditTodoModel = {
    id: null,
    title: '',
    description: '',
    isLoading: false,
    errors: null
}

const deleteTodoSlice = createSlice({
    name: 'editTodo',
    initialState,
    reducers: {
        setEdit: (state, action: PayloadAction<number | null>) => {
            state.id = action.payload;
        },
        editTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        editDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        reset: (state) => {
            state.id = null;
            state.title = '';
            state.description = '';
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

export const {actions: editTodoActions} = deleteTodoSlice
export const {reducer: editTodoReducer} = deleteTodoSlice