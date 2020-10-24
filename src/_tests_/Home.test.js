import React from 'react';
import { shallow } from 'enzyme';
import Home from './../Home';

import { findByTestAtrr } from './../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} />);
  return component;
};

describe('Home Page', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('The navigation bar should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'toolbarComponent');
    expect(wrapper.length).toBe(1);
  });
  it('It should render the make filter', () => {
    const wrapper = findByTestAtrr(component, 'makeFilter');
    expect(wrapper.length).toBe(1);
  });
  it('It should render the model filter', () => {
    const wrapper = findByTestAtrr(component, 'modelFilter');
    expect(wrapper.length).toBe(1);
  });
  it('It should render the reset button', () => {
    const wrapper = findByTestAtrr(component, 'resetBtn');
    expect(wrapper.length).toBe(1);
  });
  it('It should render the works grid', () => {
    const wrapper = findByTestAtrr(component, 'works');
    expect(wrapper.length).toBe(1);
  });
});
