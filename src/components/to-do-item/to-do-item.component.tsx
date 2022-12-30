import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteToDo,
  editToDo,
  toggleToDo,
} from '../../store/todos/todos.actions';
import { IToDo } from '../../store/todos/todos.reducer';
import './to-do-item.styles.css';

interface IToDoItemProps {
  todo: IToDo;
  index: number;
}

const ToDoItem: FC<IToDoItemProps> = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState('');

  const handleEdit = (value: string) => {
    setEditMode(true);
    setText(value);
  };

  const handleUpdateToDo = (id: number, value: string) => {
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
        onClick={() => handleUpdateToDo(todo.id, text)}
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
      <button className='btn btn-edit' onClick={() => handleEdit(todo.value)}>
        Изменить
      </button>
    </div>
  );
};

export default ToDoItem;
