import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from './../components/elements/Grid';
import { findByTestAtrr } from './../../Utils';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
  const component = shallow(<Grid {...props} />);
  return component;
};

describe('Grid component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render all works', () => {
    const wrapper = findByTestAtrr(component, 'numOfWorks');
    expect(wrapper.length).toBe(1);
  });

  it('Checking PropTypes', () => {
    const expectedProps = {
      header: 'Test header',
    };

    const propsErr = checkPropTypes(
      Grid.propTypes,
      expectedProps,
      'props',
      Grid.name
    );
    expect(propsErr).toBeUndefined();
  });
});
