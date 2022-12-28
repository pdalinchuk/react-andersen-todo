import './tab.styles.css';

const Tab = ({ text, id, handleClick, isSelected }) => {
  return (
    <button
      className={`btn-tab ${isSelected && 'btn-selected'}`}
      onClick={() => handleClick(id)}
    >
      {text}
    </button>
  );
};

export default Tab;
