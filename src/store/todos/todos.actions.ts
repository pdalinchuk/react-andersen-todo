import {
  ADD_TO_DO,
  DELETE_TO_DO,
  EDIT_TO_DO,
  TOGGLE_TO_DO,
} from './todos.types';

export const addToDo = (task: string) => {
  return {
    type: ADD_TO_DO,
    payload: {
      id: Date.now(),
      value: task,
      isActive: true,
    },
  };
};

export const editToDo = (id: number, task: string) => {
  return {
    type: EDIT_TO_DO,
    payload: {
      id,
      value: task,
    },
  };
};

export const toggleToDo = (id: number) => {
  return {
    type: TOGGLE_TO_DO,
    payload: id,
  };
};

export const deleteToDo = (id: number) => {
  return {
    type: DELETE_TO_DO,
    payload: id,
  };
};
