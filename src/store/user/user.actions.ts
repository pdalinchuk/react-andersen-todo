import { SET_USER_NAME } from './user.types';

export const setUserName = (name: string) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};
