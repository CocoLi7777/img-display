import React from 'react';
import { shallow } from 'enzyme';
import { ResetBtn } from './../components/elements/ResetBtn';
import { findByTestAtrr } from './../../Utils';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
  const component = shallow(<ResetBtn {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    component = setUp();
  });

  it('The reset button should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'button');
    expect(wrapper.length).toBe(1);
  });

  it('Checking PropTypes', () => {
    const expectedProps = {
      text: 'Test text',
      callback: mockFunc,
    };

    const propsErr = checkPropTypes(
      ResetBtn.propTypes,
      expectedProps,
      'props',
      ResetBtn.name
    );
    expect(propsErr).toBeUndefined();
  });
});
