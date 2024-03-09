import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {todoReducer} from "@/entities/Todo/model/todoSlice";
import {StateSchema} from "./types";
import {addTodoReducer} from "@/features/AddTodo/model/addTodoSlice";
import {$api} from "@/shared/api/api";
import {AxiosInstance} from "axios";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        todos: todoReducer,
        newTodo: addTodoReducer,
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })
}

export interface ThunkExtraArgs {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArgs
}