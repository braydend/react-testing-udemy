import { getLetterMatchCount } from ".";

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('returns the correct count when there are 0 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bus', secretWord);

        expect(letterMatchCount).toBe(0);
    });
    test('returns the correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('art', secretWord);

        expect(letterMatchCount).toBe(3);
    });
    test('returns the correct count when there are duplicate matching letters', () => {
        const letterMatchCount = getLetterMatchCount('butty', secretWord);

        expect(letterMatchCount).toBe(2);
    });
});