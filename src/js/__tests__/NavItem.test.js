import React from 'react';
import { shallow } from 'enzyme';

import NavItem from '../components/NavItem';

const wrapper = shallow(<NavItem path="/test-path" label="Test Label" />);

describe('NavItem component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
