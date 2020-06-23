import React from 'react';
import App from './App';
import { mount, ReactWrapper } from 'enzyme';
import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setUp = (secretWord: string | null = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord, language: 'en' }, jest.fn()]);

  React.useReducer = mockUseReducer;

  return mount(<App />);
};

describe('<App />', () => {
  test('renders without error', () => {
    const wrapper = setUp();

    expect(wrapper.length).toBe(1);
  });

  test('renders correctly', () => {
    const wrapper = setUp();
    const app = wrapper.find('#app');

    expect(wrapper.text()).toContain('Jotto');
    expect(app.length).toBe(1);
  });
});

describe('getSecretWord calls', () => {
  test('getSecretWord is called on component mount', () => {
    setUp();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setUp();
    mockGetSecretWord.mockClear();

    wrapper.setProps({});

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = setUp("party");
  });

  test('renders app when secretWord is not null', () => {
    const app = wrapper.find('#app');

    expect(app.exists()).toBe(true);
  });
  
  test('does not render spinner when secretWord is not null', () => {
    const spinner = wrapper.find('#spinner');

    expect(spinner.exists()).toBe(false);
  });
});

describe('secretWord is null', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = setUp(null);
  });

  test('does not render app when secretWord is not null', () => {
    const app = wrapper.find('#app');

    expect(app.exists()).toBe(false);
  });
  
  test('renders spinner when secretWord is not null', () => {
    const spinner = wrapper.find('#spinner');

    expect(spinner.exists()).toBe(true);
  });
});