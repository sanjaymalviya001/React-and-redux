import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "Hello" }
    ],
    students: [
        { id: 11, name: "Ram",age:44 }
    ]
}

const addTodoFunction = (state, action) => {
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo)
    // console.log(state.todos)
    // debugger
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: addTodoFunction,
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            console.log("remove todo")
        },
        addStudent: (state, action) => {
            const student = {
                id: nanoid(),
                name: action.payload.name,
                age: action.payload.age,
            }
            state.students.push(student)
        }
    }
})

export const { addTodo, removeTodo, addStudent } = todoSlice.actions

export default todoSlice.reducer