import { LOGIN,LOGOUT } from '../constants/user.constant';

export const login = user => {
  return  {
    type: LOGIN,
    payload: user
  }
};

export const logout = () => ({
  type: LOGOUT
});
