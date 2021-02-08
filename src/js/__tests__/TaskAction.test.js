import { ADD_TASK, TOGGLE_TASK } from '../constants/action-types';
import { addTask, toggleTask } from '../actions/tasks';

describe('Task actions', () => {
  it('should add task', () => {
    const task = {
      name: 'Do laundry'
    };
    const expectedAction = {
      type: ADD_TASK,
      payload: task
    };

    expect(addTask(task)).toEqual(expectedAction);
  });

  it('should resolve task', () => {
    const taskId = 'T-123';
    const expectedAction = {
      type: TOGGLE_TASK,
      payload: taskId
    };

    expect(toggleTask(taskId)).toEqual(expectedAction);
  });
});
