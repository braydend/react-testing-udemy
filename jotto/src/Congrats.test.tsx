import React from 'react';
import { shallow, mount } from 'enzyme';
import Congrats, { CongratsProps } from './Congrats';
import LanguageContext from './contexts/LanguageContext';

const setup = ({ success = true, language = 'en' }: { success?: boolean, language?: string }) => {
    
    return mount(
        <LanguageContext.Provider value={language}>
            <Congrats success={success} />
        </LanguageContext.Provider>
    );
};

describe('<Congrats />', () => {
    test('renders without error', () => {
        const wrapper = setup({ success: true });
        const component = wrapper.find('div');

        expect(component.length).toBe(1);
    });
    test('renders no text when success prop is false', () => {
        const wrapper = setup({ success: false });
        const component = wrapper.find('div');

        expect(component.text()).toBe("");
    });
    test('renders non-empty congrats message when success prop is true', () => {
        const wrapper = setup({ success: true });
        const component = wrapper.find('div');

        expect(component.text().length).not.toBe(0);
    });
});

describe('Language picker', () => {
    test('correctly renders message in english', () => {
        const wrapper = setup({ success: true, language: 'en' });

        expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
    });
    test('correctly renders message in emoji', () => {
        const wrapper = setup({ success: true, language: 'emoji' });

        expect(wrapper.text()).toBe('🎯🎉');
    });
});