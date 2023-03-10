import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ToDoItem from '../to-do-item/to-do-item.component';
import Tab from '../tab/tab.component';
import './to-do-list.styles.css';

const ToDoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [tab, setTab] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    switch (tab) {
      case 'active':
        return todo.isActive;
      case 'completed':
        return !todo.isActive;
      default:
        return todo;
    }
  });

  return (
    <div className='tasks-list'>
      <h2>
        Количество активных заданий:{' '}
        {todos.filter((todo) => todo.isActive).length}
      </h2>
      <div className='tabs-container'>
        <Tab
          isSelected={tab === 'all'}
          text='Все задания'
          id='all'
          handleClick={setTab}
        />
        <Tab
          isSelected={tab === 'active'}
          text='Активные задания'
          id='active'
          handleClick={setTab}
        />
        <Tab
          isSelected={tab === 'completed'}
          text='Выполненные задания'
          id='completed'
          handleClick={setTab}
        />
      </div>
      {filteredTodos.map((todo, index) => (
        <ToDoItem key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default ToDoList;
