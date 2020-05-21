import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (props = {}) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without error', () => {
  const wrapper = setUp();

  const appComponent = findByTestAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setUp();

  const appComponent = findByTestAttr(wrapper, 'increment-button');

  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => { 
  const wrapper = setUp();

  const appComponent = findByTestAttr(wrapper, 'counter-display');

  expect(appComponent.length).toBe(1)
});

test('counter starts at 0', () => {
});

test('clicking button increments counter display', () => {
});