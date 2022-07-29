import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {addTodo} from '../reducers/todos/todoSlice';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledInputBox = styled.input`
    width: 25rem;
    margin: 0.5rem 0.5rem;
    padding: 0.5rem;
    @media (max-width: 800px) {
        width: 15rem;
    }
`;

const StyledButton = styled.button`
    display: inline-block;
    border-radius: 15px;
    border: 2px solid black;
    width: 11rem;
    padding: 0.5rem;
    margin: 0.5rem 0.5rem;
    color: darkviolet;
    font-weight: bold;
    &:hover:not(:disabled), &:active:not(:disabled) {
        background-color: darkviolet;
        color: white;
        border: 2px solid transparent;
    }
    &:disabled {
        background-color: grey;
        color: black;
    }
`;

export default function InputBox() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const onTodoChangeHandler = (e) => {
        const current = e.target.value;
        setTodo(current);
        if (current.trim().length > 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true);
        }
    }

    const onSubmitTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo.trim()));
        setTodo('');
        setIsDisabled(true);
    }

    return (
        <StyledContainer>
            <StyledInputBox 
                type="text" 
                id="todo-bar" 
                onChange={onTodoChangeHandler}  
                value={todo}
            />
            <StyledButton onClick={onSubmitTodo} disabled={isDisabled}>ADD TODO</StyledButton>
        </StyledContainer>
    );
}