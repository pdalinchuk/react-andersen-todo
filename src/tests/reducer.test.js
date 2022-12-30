import { userReducer } from '../store/user/user.reducer';
import { todosReducer } from '../store/todos/todos.reducer';
import { setUserName } from '../store/user/user.actions';
import {
  addToDo,
  editToDo,
  toggleToDo,
  deleteToDo,
} from '../store/todos/todos.actions';

const state = {
  user: { userName: 'Pasha' },
  todos: [
    { id: 1, value: 'Проснуться', isActive: false },
    { id: 12, value: 'Покормить кошку', isActive: false },
    { id: 123, value: 'Поесть самому', isActive: true },
  ],
};

describe('reducer', () => {
  it('"Pasha" должно быть выбрано как имя', () => {
    const action = setUserName('Pasha');
    const newState = userReducer(state.user, action);

    expect(newState.userName).toEqual('Pasha');
  });

  it('Длина массива списка задач должна увеличиться на 1, используя addToDo', () => {
    const action = addToDo('Почитать книгу');
    const newState = todosReducer(state.todos, action);

    expect(newState.length).toEqual(4);
  });

  it('Новое задание со значением "Погулять" должно быть добавлено', () => {
    const action = addToDo('Погулять');
    const newState = todosReducer(state.todos, action);

    expect(newState[newState.length - 1].value).toEqual('Погулять');
  });

  it('В состоянии не должно оказаться задания с удаленным id', () => {
    const action = deleteToDo(12);
    const newState = todosReducer(state.todos, action);

    expect(newState.some((todo) => todo.id === 12)).toEqual(false);
  });

  it('Длина списка задач должна уменьшиться после использования deleteToDo', () => {
    const action = deleteToDo(123);
    const newState = todosReducer(state.todos, action);

    expect(newState.length).toEqual(2);
  });

  it('Текст задачи должен измениться', () => {
    const action = editToDo(123, 'Пойти в магазин');
    const newState = todosReducer(state.todos, action);

    expect(newState.find((todo) => todo.id === 123).value).toEqual(
      'Пойти в магазин'
    );
  });

  it('Поле isActive должно стать false для задачи id = 123 после выполнения toggleToDo', () => {
    const action = toggleToDo(123);
    const newState = todosReducer(state.todos, action);

    expect(newState.find((todo) => todo.id === 123).isActive).toEqual(false);
  });
});
