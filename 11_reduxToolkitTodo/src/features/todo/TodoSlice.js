import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "1st todo"
        },
        {
            id: 2,
            text: "2nd todo"
        }
    ],
    editTodo: { id: "", text: "" }
}
const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        },
        setEditTodo: (state, action) => { 
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            state.editTodo = action.payload
            
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            state.todos.push({ id, text })
           
            state.editTodo = {id: "", text : ""}

        }
    }
})

export const { addTodo, removeTodo, setEditTodo, updateTodo } = TodoSlice.actions
export default TodoSlice.reducer