import { createSlice, nanoid } from "@reduxjs/toolkit";

// The current state of the todos, called initialState
const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
}

// Creating the todoSlice using createSlice
export const todoSlice = createSlice({
    name: "todo", // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        addTodo: (state, action) => { // Reducer function to add a new todo
            const todo = {
                id: nanoid(), // Generating a unique id using nanoid
                text: action.payload // Setting the text of the new todo from the action payload
            }
            state.todos.push(todo) // Adding the new todo to the state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                (todo.id !== action.payload)) // Filtering out the todo with the id provided in the action payload
        },
       
    }
})

// Exporting the action creators addTodo and removeTodo
export const { addTodo, removeTodo } = todoSlice.actions

// Exporting the reducer function of the todoSlice
export default todoSlice.reducer
