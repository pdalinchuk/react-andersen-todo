import { SET_USER_NAME } from './user.types';

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
