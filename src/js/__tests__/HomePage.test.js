import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../components/HomePage';

const wrapper = shallow(<HomePage />);

describe('HomePage component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
