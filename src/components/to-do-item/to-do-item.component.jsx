import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteToDo,
  editToDo,
  toggleToDo,
} from '../../store/todos/todos.actions';
import './to-do-item.styles.css';

const ToDoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState('');
  const [text, setText] = useState('');

  const handleEdit = (id, value) => {
    setEditMode(true);
    setId(id);
    setText(value);
  };

  const handleUpdateToDo = (id, value) => {
    if (!value) {
      setEditMode(false);
    } else {
      dispatch(editToDo(id, value));
      setEditMode(false);
    }
  };

  return editMode ? (
    <div className='task-container'>
      <input
        className='edit-task-input'
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button
        className='btn btn-update'
        onClick={() => handleUpdateToDo(id, text)}
      >
        OK
      </button>
    </div>
  ) : (
    <div className='task-container'>
      <input
        type='checkbox'
        className='checkbox'
        onChange={() => {
          dispatch(toggleToDo(todo.id));
        }}
        checked={!todo.isActive}
      />
      <p className={`task ${!todo.isActive ? 'completed' : ''}`}>
        {index + 1}) {todo.value}
      </p>
      <button
        className='btn btn-delete'
        onClick={() => dispatch(deleteToDo(todo.id))}
      >
        Удалить
      </button>
      <button
        className='btn btn-edit'
        onClick={() => handleEdit(todo.id, todo.value)}
      >
        Изменить
      </button>
    </div>
  );
};

export default ToDoItem;
