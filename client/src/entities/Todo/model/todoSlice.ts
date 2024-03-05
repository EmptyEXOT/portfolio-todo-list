import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoModel} from "@/entities/Todo/model/types";

const initialState: TodoModel[] = [{
    created: '',
    deadline: '',
    description: 'Description of Todo',
    header: 'Todo Header',
    isFinished: false,
}]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TodoModel>) => {
            state.push(action.payload)
        }
    }
})

export const {actions: todoActions} = todoSlice
export const {reducer: todoReducer} = todoSlice