import { createSlice, nanoid } from '@reduxjs/toolkit';

// export const ADD_TODO = createAction('ADD_TODO');

const initialState = {
    todos: []
};


/* 
    createSlice() accepts an object of reducer functions, a slice name, and an initial state value, and automatically
    generates a slice reducer with corresponding action creators and action types.
*/
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                const {id, text, isCompleted} = action.payload;
                state.todos.push({id, text, isCompleted});
            },
            prepare(text) {
                const payload = {
                    id: nanoid(),
                    text,
                    isCompleted: false
                };
                return {payload};
            }
        },
        toggleTodo: (state, action) => {
            const {id} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (!todo)
                return;
            todo.isCompleted = !todo.isCompleted;
        },
        removeTodo: (state, action) => {
            const {id} = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        }
    }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;