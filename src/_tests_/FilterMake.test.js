import React from 'react';
import { shallow, mount } from 'enzyme';
import { FilterMake } from './../components/elements/FilterMake';
import { findByTestAtrr } from './../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<FilterMake {...props} />);
  return component;
};

describe('Make filter component', () => {
  let component;
  let mockFunc;
  beforeEach(() => {
    component = setUp();
    mockFunc = jest.fn();
  });

  it('The make filter should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'makeFilter');
    expect(wrapper.length).toBe(1);
  });

  it('should call onChange prop', () => {
    const mockFn = jest.fn();
    const event = 'canon';
    const component = shallow(
      <select style={{ width: 240 }} onChange={mockFn}>
        <option value="all">All Make</option>
        <option value="canon">Canon</option>
        <option value="fuji">Fuji</option>
        <option value="leica">Leica</option>
        <option value="nikon">Nikon</option>
        <option value="panasonic">Panasonic</option>
      </select>
    );
    component.simulate('change', event);
    expect(mockFn).toBeCalledWith('canon');
  });
});
