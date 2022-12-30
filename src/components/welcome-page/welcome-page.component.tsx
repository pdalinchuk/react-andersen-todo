import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../store/user/user.actions';
import './welcome-page.styles.css';

const WelcomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [enteredName, setEnteredName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEnteredName(event.target.value);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = enteredName.trim();
    setEnteredName('');

    if (!name.length) {
      setErrorMessage('Поле не может быть пустым');
    } else if (name[0] !== name[0].toUpperCase()) {
      setErrorMessage('Имя должно начинаться с большой буквы');
    } else {
      dispatch(setUserName(name));
      navigate('/todopage');
    }
  };

  return (
    <>
      <form className='welcome-form' onSubmit={handleSubmit}>
        <label>Введите свое имя</label>
        <input
          className='user-name'
          type='text'
          value={enteredName}
          onChange={handleChange}
        />
        <button type='submit'>Сохранить</button>
      </form>
      {errorMessage ? <p className='username-error'>{errorMessage}</p> : null}
    </>
  );
};

export default WelcomePage;
