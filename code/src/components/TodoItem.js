import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';
import moment from 'moment';

import { RemoveButton } from '../lib/RemoveButton';
import { SpanDate, Paragraf } from '../lib/Text';
import { CustomCheckbox } from './CustomCheckbox';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 2px solid #e8e8e8;
`;

const WrapperTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperTodoText = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperTime = styled.div``;

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(todos.actions.removeTodo(todo.id));
  };

  return (
    <Wrapper>
      <WrapperTodo>
        <WrapperTodoText>
          <CustomCheckbox
            isChecked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <Paragraf
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {todo.text}
          </Paragraf>
        </WrapperTodoText>
        <RemoveButton onClick={handleRemoveTodo}>X</RemoveButton>
      </WrapperTodo>
      <WrapperTime>
        <SpanDate>Added: {moment(todo.startDate).format('l')}</SpanDate>
      </WrapperTime>
    </Wrapper>
  );
};
