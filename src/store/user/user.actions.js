import { SET_USER_NAME } from './user.types.js';

export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};
