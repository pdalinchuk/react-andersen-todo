import { combineReducers } from 'redux';
import { todosReducer } from './todos/todos.reducer';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({ user: userReducer, todos: todosReducer });

export default rootReducer;
