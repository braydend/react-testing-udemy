import React from 'react';

export type CongratsProps = {
    success: boolean,
};

const Congrats: React.FC<CongratsProps> = ({ success }) => {
    return (
        <div>{success ? 'Congratulations! You guessed the word!' : ''}</div>
    );
};

export default Congrats;