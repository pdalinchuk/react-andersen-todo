import {
  ADD_TO_DO,
  DELETE_TO_DO,
  EDIT_TO_DO,
  TOGGLE_TO_DO,
} from './todos.types';

const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [
        ...state,
        {
          id: action.payload.id,
          value: action.payload.value,
          isActive: action.payload.isActive,
        },
      ];
    case EDIT_TO_DO:
      const { id, value } = action.payload;
      return state.map((todo) => (todo.id !== id ? todo : { ...todo, value }));
    case TOGGLE_TO_DO:
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, isActive: !todo.isActive }
      );
    case DELETE_TO_DO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
