import React from 'react';
import { shallow, mount } from 'enzyme';
import Congrats from './Congrats';
import LanguageContext from './contexts/LanguageContext';
import SuccessContext from './contexts/SuccessContext';

const setup = ({language = 'en', success = true}: {language?: string, success?: boolean}) => {

    return mount(
        <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
            <LanguageContext.Provider value={language}>
                <Congrats />
            </LanguageContext.Provider>
        </SuccessContext.SuccessProvider>
    );
};

describe('<Congrats />', () => {
    test('renders without error', () => {
        const wrapper = setup({});
        const component = wrapper.find('div');

        expect(component.length).toBe(1);
    });
    test('renders no text when success is false', () => {
        const wrapper = setup({ success: false });
        const component = wrapper.find('div');

        expect(component.text()).toBe("");
    });
    test('renders non-empty congrats message when success is true', () => {
        const wrapper = setup({});
        const component = wrapper.find('div');

        expect(component.text().length).not.toBe(0);
    });
});

describe('Language picker', () => {
    test('correctly renders message in english', () => {
        const wrapper = setup({});

        expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
    });
    test('correctly renders message in emoji', () => {
        const wrapper = setup({ language: 'emoji' });

        expect(wrapper.text()).toBe('🎯🎉');
    });
});