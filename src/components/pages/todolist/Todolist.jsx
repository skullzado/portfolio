import React from 'react';
import { useTodolistContext } from './context/todolistContext';
import { TodoItem } from './TodoItem';
import './Todolist.css';

export const Todolist = () => {
  const { todolist } = useTodolistContext();

  return (
    <ul className="todolist">
      {todolist.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
