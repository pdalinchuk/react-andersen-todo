import { SET_USER_NAME } from './user.types';

const initialState = {};

export interface StateLogin {
  userName?: string;
}

export const userReducer = (
  state: StateLogin = initialState,
  action: Record<string, any>
): StateLogin => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
