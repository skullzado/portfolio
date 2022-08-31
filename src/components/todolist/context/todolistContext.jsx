import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { poorId } from '../../../utils/utils';

const TodolistContext = createContext();

const initialTodolist = JSON.parse(localStorage.getItem('todolist')) || [
  { id: poorId(), title: 'Learn React', completed: false },
  { id: poorId(), title: 'Learn TypeScript', completed: false },
  { id: poorId(), title: 'Learn Something', completed: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case 'EDIT_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((todo) => todo.completed === false);
    default:
      return state;
  }
};

export const TodolistProvider = ({ children }) => {
  const [todolist, dispatch] = useReducer(reducer, initialTodolist);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [title, setTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const onAddTitle = (event) => setTitle(event.target.value);
  const onEditTitle = (event) => setEditTitle(event.target.value);
  const onSelectedTodo = (event) => {
    setIsEditing(true);
    setSelectedTodo(todolist.find((todo) => todo.id === event.target.value));
    setEditTitle(selectedTodo.title);
  };

  const handleCompleteTodo = (id) => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: id,
    });
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!title) return;

    dispatch({
      type: 'ADD_TODO',
      payload: { id: poorId(), title, completed: false },
    });

    setTitle('');
  };

  const handleEditTodo = (event) => {
    event.preventDefault();

    if (!editTitle) return;

    dispatch({
      type: 'EDIT_TODO',
      payload: { id: selectedTodo.id, title: editTitle },
    });

    setEditTitle('');
    setIsEditing(false);
    handleResetSelected();
  };

  const handleDeleteTodo = () => {
    dispatch({ type: 'DELETE_TODO' });
  };

  const handleResetSelected = () => {
    setSelectedTodo({ value: null });
    setIsEditing(false);
  };

  useEffect(() => {
    setEditTitle(selectedTodo.title);
  }, [setEditTitle, selectedTodo.title]);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }, [todolist]);

  return (
    <TodolistContext.Provider
      value={{
        todolist,
        title,
        selectedTodo,
        isEditing,
        editTitle,
        onEditTitle,
        onAddTitle,
        onSelectedTodo,
        handleAddTodo,
        handleEditTodo,
        handleCompleteTodo,
        handleDeleteTodo,
        handleResetSelected,
      }}
    >
      {children}
    </TodolistContext.Provider>
  );
};

export const useTodolistContext = () => {
  return useContext(TodolistContext);
};
