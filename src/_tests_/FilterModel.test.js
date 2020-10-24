import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../Utils';
import { FilterModel } from '../components/elements/FilterModel';

const setUp = (props = {}) => {
  const component = shallow(<FilterModel {...props} />);
  return component;
};

describe('Model filter component', () => {
  let component;
  let mockFunc;
  beforeEach(() => {
    component = setUp();
    mockFunc = jest.fn();
  });

  it('The make filter should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'modelFilter');
    expect(wrapper.length).toBe(1);
  });

  it('should call onChange prop', () => {
    const mockFn = jest.fn();
    const event = 'NIKON D80';
    const component = shallow(
      <select onChange={mockFn}>
        <option value="all">All Model</option>
        <option value="NIKON D80">NIKON D80</option>
        <option value="CANON EOS 20D">CANON EOS 20D</option>
        <option value="FinePix S6500fd">FINEPIX S6500fd</option>
        <option value="D-LUX 3">D-LUX 3</option>
        <option value="SLP1000SE">SLP1000SE</option>
        <option value="DMC-FZ30">DMC-FZ30</option>
        <option value="CANON EOS 400D DIGITAL">CANON EOS 400D DIGITAL</option>
      </select>
    );
    component.simulate('change', event);
    expect(mockFn).toBeCalledWith('NIKON D80');
  });
});
