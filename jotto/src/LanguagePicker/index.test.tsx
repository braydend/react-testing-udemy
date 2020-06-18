import LanguagePicker, { Props } from './index';
import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

describe('<LanguagePicker />', () => {
    const setUp = (customProps?: Partial<Props>): ShallowWrapper => {
        const defaultProps: Props = { setLanguage: () => {} };
        const props: Props = { ...defaultProps, ...customProps };

        return shallow(<LanguagePicker { ...props} />);
    }

    test('it renders without error', () => {
        const wrapper = setUp();

        expect(wrapper.length).toBe(1);
    });

    test('render > 0 Language buttons', () => {
        const wrapper = setUp();        
        const languageButtons = wrapper.find('#languages').find('button');

        expect(languageButtons.length).toBeGreaterThan(0);
    });

    test('calls setLanguage prop on selection', () => {
        const mockSetLanguage = jest.fn();
        const wrapper = setUp({ setLanguage: mockSetLanguage });
        const firstLangageButton = wrapper.find('#languages').find('button').first();
        firstLangageButton.simulate('click');

        expect(mockSetLanguage).toHaveBeenCalled();
    });
});