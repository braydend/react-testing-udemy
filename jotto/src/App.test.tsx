import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const setUp = () => shallow(<App />);

describe('<App />', () => {
  test('renders without error', () => {
    const wrapper = setUp();

    expect(wrapper.length).toBe(1);
  });

  test('renders correctly', () => {
    const wrapper = setUp();

    expect(wrapper.text()).toContain('Jotto');
  });
});