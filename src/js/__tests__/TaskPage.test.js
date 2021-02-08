import React from 'react';
import { shallow } from 'enzyme';

import TaskPage from '../components/TaskPage';

const wrapper = shallow(<TaskPage />);

describe('TaskPage component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
