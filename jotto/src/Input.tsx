import React from 'react';

type Props = {
    secretWord: string;
};

const Input: React.FC<Props> = ({ secretWord }) => {
    // useState is not destructured on import so it can be mocked
    const [currentGuess, setCurrentGuess] = React.useState<string>();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCurrentGuess("");
    };

    return (<div>
        <form>
            <input type="text" placeholder="Enter guess" onChange={({ target: { value } }) => setCurrentGuess(value)} value={currentGuess} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>);
};

export default Input;