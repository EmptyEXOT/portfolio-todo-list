import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoModel} from "@/entities/Todo/model/types";

const initialState: TodoModel = {
    header: '',
    created: '',
    isFinished: false,
    deadline: '',
    description: ''
}

const addTodoSlice = createSlice({
    name: 'addTodo',
    initialState,
    reducers: {
        setHeader: (state, action: PayloadAction<string>) => {
            state.header = action.payload
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        reset: (state) => {
            state.description = '';
            state.header = '';
        }
    }
})

export const {actions: addTodoActions} = addTodoSlice
export const {reducer: addTodoReducer} = addTodoSlice