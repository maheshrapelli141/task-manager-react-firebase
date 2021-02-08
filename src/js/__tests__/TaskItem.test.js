import React from 'react';
import { mount } from 'enzyme';

import { TaskItem } from '../components/TaskItem';
import { addDays, toDateString } from '../util/DateUtil';

const now = '2018-01-01';
Date.now = jest.fn().mockReturnValue(now);

const setup = customProps => {
  const props = {
    id: '1',
    name: 'some task',
    category: 'a category',
    description: 'lorem ipsum',
    createdDate: now,
    reminderDate: now,
    dueDate: toDateString(addDays(now, 8)),
    resolved: false,
    dispatch: jest.fn(),
    ...customProps
  };

  const wrapper = mount(<TaskItem {...props} />);

  return {
    props,
    wrapper
  };
};

describe('TaskItem component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render card with border-warning when task is due in 3 days', () => {
    const { wrapper } = setup({ dueDate: toDateString(addDays(now, 3)) });
    expect(wrapper.find('.card.border-warning')).toHaveLength(1);
  });

  it('should render card with border-danger when task is over due', () => {
    const { wrapper } = setup({ dueDate: toDateString(addDays(now, -1)) });
    expect(wrapper.find('.card.border-danger')).toHaveLength(1);
  });

  it('should render card with border-success when task is resolved', () => {
    const { wrapper } = setup({ resolved: true });
    expect(wrapper.find('.card.border-success')).toHaveLength(1);
  });

  it('shoud call dispatch when button is clicked', () => {
    const { wrapper, props } = setup();
    expect(props.dispatch.mock.calls).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(props.dispatch.mock.calls).toHaveLength(1);
  });
});
