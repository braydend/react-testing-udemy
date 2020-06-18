import axios from 'axios';

export const getSecretWord = async (setSecretWord: (x: string) => void) => {
    try {
        const response = await axios.get('http://localhost:3030');
        setSecretWord(response.data);
    } catch (e) {
        console.error(e);
    }
};

export default { getSecretWord };