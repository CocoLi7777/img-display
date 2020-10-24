import React from 'react';
import { shallow } from 'enzyme';
import Header from './../components/elements/Header';
import { findByTestAtrr } from './../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('The navigation bar should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });
  it('It should render the logo image', () => {
    const wrapper = findByTestAtrr(component, 'logoImage');
    expect(wrapper.length).toBe(1);
  });
});
