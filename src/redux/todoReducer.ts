import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
let newId = 1;
export interface TodoInterface {
    id: number,
    text: string,
    arr: string[]
}
export interface PropsInput {
    text: string,
    id: number
}
interface editInput {
    newText: string,
    onId: number
}
export interface TodoMainInterface {
    todos: TodoInterface[]
}

const initialState: TodoMainInterface = {
    todos: []
}
const todoSlice = createSlice({
    name: "TodoList",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [...state.todos, {
                id: newId++,
                text: action.payload,
                arr: []
            }]
        },
        todoInto: (state, test: PayloadAction<PropsInput>) => {
            state.todos.map((todo) => {
                if (todo.id === test.payload.id) {
                    console.log(todo.text);
                    todo.arr.push(test.payload.text)
                }
                return todo
            })
        },
        editTodo: (state, newInputChange: PayloadAction<editInput>) => {
            console.log(newInputChange.payload.onId);
            
            state.todos.map((todo) => {
                if (todo.id === newInputChange.payload.onId) {
                    return todo.text = newInputChange.payload.newText
                }
                return todo
            })
        },
        remuve: (state, deliteListId: PayloadAction<number>) => {
            state.todos.splice(state.todos.findIndex((todo)=> todo.id === deliteListId.payload),1)
        }


    }
})

export const { addTodo, todoInto, editTodo, remuve } = todoSlice.actions
export default todoSlice.reducer