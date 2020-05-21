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
  const wrapper = setUp();

  const counter = findByTestAttr(wrapper, 'counter-display');
  
  // This does not work with functional components
  // expect(wrapper.state('counter')).toBe(0);
  expect(counter.text()).toContain('0');
});

test('clicking button increments counter display', () => {
  const wrapper = setUp();

  // If the counter is defined as follows, it does not update after the click
  // const counter = findByTestAttr(wrapper, 'counter-display');
  const getCounter = () => findByTestAttr(wrapper, 'counter-display');
  const button = findByTestAttr(wrapper, 'increment-button');

  expect(getCounter().text()).toContain('0');
  button.simulate('click');
  // This will return the value from when the wrapper was generated
  // expect(counter.text()).toContain('1');
  expect(getCounter().text()).toContain('1');
});