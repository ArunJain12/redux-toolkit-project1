import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodos } from '../reducers/todos/todoSelectors';
import { removeTodo, toggleTodo } from '../reducers/todos/todoSlice';
import Todo from './Todo';

const StyledUL = styled.ul`
    align-self: center;
    width: 25em;
    scroll-behavior: smooth;
    overflow-y: auto;
    height: 20rem;
`;

export default function TodoList() {
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();
    const toggle = (payload) => {
        dispatch(toggleTodo(payload));
    }
    const remove = (payload) => {
        dispatch(removeTodo(payload));
    }

    return (
        <StyledUL>
            {
                todos.map((todo) => {
                    return (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            toggle={toggle}
                            remove={remove}
                        />
                    );
                })
            }
        </StyledUL>
    );
}