import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
    display: flex;
    list-style-type: none;
    margin: 15px 0px;
`;

/*
    accent-color is used to change background color for both checkbox and radio elements.
*/
const StyledInput = styled.input`
    accent-color: ${(props) => props.completed ? 'darkviolet' : ''};
    width: 3rem;
    height: 3rem;
`

const StyledText = styled.span`
    width: 16rem;
    height: fit-content;
    margin: auto 2rem;
    text-transform: capitalize;
    font-size: medium;
    &:hover {
        text-decoration: underline;
    }
`;

const StyledTodoButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    margin: auto 4px;
    font-size: x-large;

    &:hover {
        color: red;
    }
`;

export default function Todo(props) {
    const { todo, toggle, remove } = props;

    return (
        <StyledListItem>
            <StyledInput type="checkbox" completed={todo.isCompleted} onChange={() => toggle({id: todo.id})} />
            <StyledText>{todo.text}</StyledText>
            <StyledTodoButton onClick={() => remove({id: todo.id})}>X</StyledTodoButton>
        </StyledListItem>
    )
}