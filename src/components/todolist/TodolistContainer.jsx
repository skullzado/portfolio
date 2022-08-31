import { useTodolistContext } from './context/todolistContext';
import { InputContainer } from './InputContainer';
import { Todolist } from './Todolist';
import './TodolistContainer.css';

export const TodolistContainer = () => {
  document.title = 'skullzado - Todolist';
  const { todolist, handleDeleteTodo, handleResetSelected } =
    useTodolistContext();

  return (
    <div className="todolist-container">
      <InputContainer />
      {todolist.length ? (
        <div className="todolist-actions">
          <button
            className="btn todolist__delete-btn"
            onClick={handleDeleteTodo}
          >
            Delete Completed
          </button>
          <button
            className="btn todolist__clear-btn"
            onClick={handleResetSelected}
          >
            Reset
          </button>
        </div>
      ) : null}
      <Todolist />
    </div>
  );
};
