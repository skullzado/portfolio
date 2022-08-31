import React, { useRef, useEffect } from 'react';
import { useTodolistContext } from './context/todolistContext';
import './InputContainer.css';

export const InputContainer = () => {
  const {
    selectedTodo,
    editTitle,
    isEditing,
    handleAddTodo,
    handleEditTodo,
    title,
    onAddTitle,
    onEditTitle,
  } = useTodolistContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [selectedTodo]);

  let content;
  if (isEditing) {
    content = (
      <form className="input-container" onSubmit={handleEditTodo}>
        <input
          className="input__todo"
          type="text"
          minLength={4}
          maxLength={32}
          autoComplete="off"
          value={editTitle || ''}
          onChange={onEditTitle}
          ref={inputRef}
        />
        <button className="btn input__add-btn">Edit</button>
      </form>
    );
  } else {
    content = (
      <form className="input-container" onSubmit={handleAddTodo}>
        <input
          className="input__todo"
          type="text"
          minLength={4}
          maxLength={32}
          autoComplete="off"
          value={title}
          onChange={onAddTitle}
        />
        <button className="btn input__add-btn">Add</button>
      </form>
    );
  }

  return content;
};
