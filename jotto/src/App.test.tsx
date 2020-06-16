import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setUp = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  return mount(<App />);
};

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

describe('getSecretWord calls', () => {
  test('getSecretWord is called on component mount', () => {
    setUp();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});