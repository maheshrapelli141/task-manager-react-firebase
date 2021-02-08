import { v4 as uuid } from 'uuid';

import { ADD_TASK, LOAD_TASKS, TOGGLE_TASK } from '../constants/task.constant';
import { toDateString } from '../util/DateUtil';

const createTask = task => {
  return {
    id: uuid(),
    user: task.user,
    category: task.category,
    name: task.name,
    description: task.description,
    createdDate: toDateString(Date.now()),
    reminderDate: task.reminderDate,
    dueDate: task.dueDate,
    resolved: false
  };
};

const toggleTask = (task, taskId) => {
  if (task.id === taskId) {
    return {
      ...task,
      // resolved: !task.resolved
      resolved: true
    };
  } 
  // else {
  //   return {
  //     ...task,
  //     resolved: true
  //   };
  // }
  return task;
};


const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, createTask(action.payload)];
    case TOGGLE_TASK:
      return state.map(task => toggleTask(task, action.payload));
    case LOAD_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default tasksReducer;
