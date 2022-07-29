import {createSelector} from 'reselect';

const todoSliceSelector = state => state.todoSlice.todos;

export const getTodos = createSelector(todoSliceSelector, todos => {
    return todos;
});