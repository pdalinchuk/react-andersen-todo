import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import AddToDo from '../add-to-do/add-to-do.component';
import ToDoList from '../to-do-list/to-do-list.component';

import './to-do-page.styles.css';

const ToDoPage: FC = () => {
  const name = useSelector((state: RootState) => state.user.userName);
  return (
    <>
      <p className='greeting'>Привет, {name}!</p>
      <AddToDo />
      <ToDoList />
    </>
  );
};

export default ToDoPage;
