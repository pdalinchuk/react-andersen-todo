import {
  ADD_TO_DO,
  DELETE_TO_DO,
  EDIT_TO_DO,
  TOGGLE_TO_DO,
} from './todos.types';

export interface IToDo {
  id: number;
  value: string;
  isActive: boolean;
}

const initialState: IToDo[] = [];

export const todosReducer = (
  state: IToDo[] = initialState,
  action: Record<string, any>
) => {
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
      return state.map((todo: IToDo) =>
        todo.id !== id ? todo : { ...todo, value }
      );
    case TOGGLE_TO_DO:
      return state.map((todo: IToDo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, isActive: !todo.isActive }
      );
    case DELETE_TO_DO:
      return state.filter((todo: IToDo) => todo.id !== action.payload);
    default:
      return state;
  }
};
