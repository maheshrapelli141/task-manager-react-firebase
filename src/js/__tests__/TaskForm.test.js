import React from 'react';
import { mount } from 'enzyme';

import { TaskForm } from '../components/TaskForm';

Date.now = jest.fn().mockReturnValue('2018-01-01');

const setup = () => {
  const props = {
    addTask: jest.fn()
  };

  const wrapper = mount(<TaskForm {...props} />);

  return {
    props,
    wrapper
  };
};

describe('TaskForm component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should disable add task button when mandatory fields are empty', () => {
    const { wrapper } = setup();
    expect(wrapper.find('button').props().disabled).toBeTruthy();
  });

  it('shoud call addTask when form is submitted', () => {
    const { wrapper, props } = setup();
    expect(props.addTask.mock.calls).toHaveLength(0);
    wrapper.find('button').simulate('submit');
    expect(props.addTask.mock.calls).toHaveLength(1);
    wrapper.find('form').simulate('submit');
    expect(props.addTask.mock.calls).toHaveLength(2);
  });
});
