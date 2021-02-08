import { ADD_TASK, TOGGLE_TASK } from '../constants/task.constant';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

export const toggleTask = taskId => ({
  type: TOGGLE_TASK,
  payload: taskId
});
