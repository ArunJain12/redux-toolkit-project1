import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../reducers/todos/todoSlice';

export const store = configureStore({
    reducer: {
        todoSlice: todoReducer
    }
});