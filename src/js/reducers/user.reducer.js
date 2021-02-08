import { LOGIN, LOGOUT } from '../constants/user.constant';

const userReducer = (user = null,action) => {
  switch(action.type){
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return user;
  }
};

export default userReducer;