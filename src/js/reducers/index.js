import { combineReducers } from 'redux';

import tasksReducer from './tasks.reducer';
import userReducer from './user.reducer';

export default combineReducers({ 
  tasks: tasksReducer,
  user: userReducer
});
