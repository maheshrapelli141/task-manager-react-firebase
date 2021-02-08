import { ADD_TASK, TOGGLE_TASK } from '../constants/action-types';
import tasks from '../reducers/tasks';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

jest.mock('../../data/mock-tasks.json', () => {
  return [];
});

const now = '2018-01-01';
Date.now = jest.fn().mockReturnValue(now);

describe('Task reducer', () => {
  it('should return initial state', () => {
    expect(tasks(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TASK', () => {
    expect(
      tasks(undefined, {
        type: ADD_TASK,
        payload: {
          name: 'Do laundry'
        }
      })
    ).toEqual([
      { id: 1, name: 'Do laundry', createdDate: now, resolved: false }
    ]);
  });

  it('should handle TOGGLE_TASK resolve', () => {
    expect(
      tasks([{ id: 1, resolved: false }], {
        type: TOGGLE_TASK,
        payload: 1
      })
    ).toEqual([{ id: 1, resolved: true }]);
  });

  it('should handle TOGGLE_TASK unresolved', () => {
    expect(
      tasks([{ id: 1, resolved: true }], {
        type: TOGGLE_TASK,
        payload: 1
      })
    ).toEqual([{ id: 1, resolved: false }]);
  });
});
