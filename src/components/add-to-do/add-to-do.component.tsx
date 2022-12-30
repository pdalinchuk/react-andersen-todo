import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../store/todos/todos.actions';
import './add-to-do.styles.css';

const AddToDo = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const taskInput: HTMLInputElement | null =
      document.querySelector('.new-task');
    let task = taskInput?.value.trim();

    if (!task?.length) {
      setErrorMessage('Пожалуйста, введите текст задания');
    } else {
      setErrorMessage('');
      dispatch(addToDo(task));
      if (taskInput) taskInput.value = '';
    }
  };

  return (
    <>
      <form className='add-todo-form' onSubmit={handleSubmit}>
        <label>Введите новое задание:</label>
        <input type='text' className='new-task' />
        <button type='submit'>Добавить задание</button>
      </form>
      {errorMessage ? <p className='add-todo-error'>{errorMessage}</p> : null}
    </>
  );
};

export default AddToDo;
