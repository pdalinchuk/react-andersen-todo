import { FC } from 'react';
import './tab.styles.css';

type ToDoFilter = 'all' | 'active' | 'completed';

interface ITabProps {
  text: string;
  isSelected: boolean;
  id: ToDoFilter;
  handleClick: (id: ToDoFilter) => void;
}

const Tab: FC<ITabProps> = ({ text, id, handleClick, isSelected }) => {
  return (
    <button
      className={`btn-tab ${isSelected && 'btn-selected'}`}
      onClick={() => handleClick(id)}
      children={text}
    />
  );
};

export default Tab;
