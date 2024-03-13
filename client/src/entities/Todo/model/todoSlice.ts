import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {TodoListSchema, TodoModel} from "@/entities/Todo/model/types";
import {StateSchema} from "@/shared/store/types";
import {fetchAllTodosService} from "@/entities/Todo/services/fetchAllTodosService";

const todoAdapter = createEntityAdapter<TodoModel, number>({
    selectId: model => model.id,
})

export const getTodos = todoAdapter.getSelectors(
    (state: StateSchema) => state.todos || todoAdapter.getInitialState()
)

const todoSlice = createSlice({
    name: 'todoList',
    initialState: todoAdapter.getInitialState<TodoListSchema>({
        isLoading: false,
        error: null,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTodosService.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchAllTodosService.fulfilled, (state, action) => {
                state.isLoading = false;
                todoAdapter.setAll(state, action.payload)
            })
            .addCase(fetchAllTodosService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {actions: todoActions} = todoSlice
export const {reducer: todoReducer} = todoSlice