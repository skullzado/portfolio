import { useTodolistContext } from './context/todolistContext';
import './TodoItem.css';

export const TodoItem = ({ id, title, completed }) => {
  const { selectedTodo, onSelectedTodo, handleCompleteTodo } =
    useTodolistContext();

  return (
    <li className={`${completed ? 'todo todo--completed' : 'todo'}`}>
      <div className="todo-details">
        <input
          className="todo__selected"
          type="radio"
          name="todo"
          value={id}
          checked={selectedTodo.id === id}
          onChange={onSelectedTodo}
          disabled={completed}
        />
        <h4 className="todo__title">{title}</h4>
      </div>
      <div className="todo-actions">
        <button
          className="btn todo__completed"
          onClick={() => handleCompleteTodo(id)}
          disabled={selectedTodo.id === id}
        >
          Complete
        </button>
      </div>
    </li>
  );
};
