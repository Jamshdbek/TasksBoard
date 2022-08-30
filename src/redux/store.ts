import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoReducer"

export const store = configureStore({
    reducer: {
        todoList: todoReducer,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispach = typeof store.dispatch
