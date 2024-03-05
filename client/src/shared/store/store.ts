import {configureStore} from '@reduxjs/toolkit'
import {todoReducer} from "@/entities/Todo/model/todoSlice";
import {addTodoReducer} from "@/features/AddTodo/model/addTodoSlice";

export const store = configureStore({
    reducer: {
        todoReducer,
        addTodoReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch