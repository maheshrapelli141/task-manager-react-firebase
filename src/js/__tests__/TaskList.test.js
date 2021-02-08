import React from 'react';
import { mount } from 'enzyme';

import { TaskList } from '../components/TaskList';

const setup = customProps => {
  const props = {
    tasks: [],
    ...customProps
  };

  const wrapper = mount(<TaskList {...props} />);

  return {
    props,
    wrapper
  };
};

jest.mock('../components/TaskItem', () => {
  const TaskItem = () => <div />;
  return TaskItem;
});

describe('TaskList component', () => {
  it('should render empty state when tasks is empty', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render tasks', () => {
    const { wrapper } = setup({
      tasks: [
        {
          id: '123',
          name: 'Some task',
          category: 'Cat A',
          createDate: '2018-01-01',
          dueDate: '2018-01-01',
          reminderDate: '2018-01-01',
          description: 'lorem ipsum',
          resolved: true
        }
      ]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
