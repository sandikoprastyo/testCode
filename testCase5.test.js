import DecryptingEmojiCode from './testCase5.js';

describe('test case 5 ', () => {
  test('test case 1', () => {
    const text =
      "I'm feeling 🤔 about the upcoming ✈️ trip. Will we see 🗺 landmarks?";
    expect(DecryptingEmojiCode(text)).toBe(
      "I'm feeling thinking about the upcoming airplane trip. Will we see map landmarks?",
    );
  });

  test('test case 2', () => {
    const text = '🥷🏼! 🎊 for the 🥷🏼 birthday surprise! ☄️ to the party place!';
    expect(DecryptingEmojiCode(text)).toBe(
      'Keep it secret! Celebration for the secret birthday surprise! Blast off to the party place!',
    );
  });
});
