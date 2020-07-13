import React from 'react';
import { shallow, mount } from 'enzyme';
import successContext from './SuccessContext';

// Wrapper used for useSuccess tests
const FunctionalComponent: React.FC = () => {
    successContext.useSuccess();

    return <div />;
}

describe('useSuccess', () => {
    test('Throws error if called outside of <SuccessProvider>', () => {
        expect(() => {
            shallow(<FunctionalComponent />);
        }).toThrow("useSuccess must be used within an SuccessProvider");
    });

    test('Does not throw error when called inside <SuccessProvider>', () => {
        expect(() => {
            mount(
                <successContext.SuccessProvider>
                    <FunctionalComponent />
                </successContext.SuccessProvider>
            );
        }).not.toThrow();
    });
});