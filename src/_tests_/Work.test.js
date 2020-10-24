import React from 'react';
import { shallow } from 'enzyme';
import { Work } from './../components/elements/Work';
import { findByTestAtrr } from './../../Utils';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
  const component = shallow(<Work {...props} />);
  return component;
};

describe('work component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Checking PropTypes', () => {
    const expectedProps = {
      item: {},
    };

    const propsErr = checkPropTypes(
      Work.propTypes,
      expectedProps,
      'props',
      Work.name
    );
    expect(propsErr).toBeUndefined();
  });
});
