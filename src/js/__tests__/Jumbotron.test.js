import React from 'react';
import { shallow } from 'enzyme';

import Jumbotron from '../components/Jumbotron';

const wrapper = shallow(<Jumbotron>Sample Header</Jumbotron>);

describe('Jumbotron component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
