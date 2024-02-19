import isCircularPalindrome from './testCase3';

describe('test case 3', () => {
  test('test case 1 Input: racecar Output: true', () => {
    expect(isCircularPalindrome('racecar')).toBeTruthy();
  });

  test('test case 2 Input: hello world Output: true', () => {
    expect(isCircularPalindrome('hello world')).toBeFalsy();
  });

  test('test case 3 Input: mAlAyAlaM Output: true', () => {
    expect(isCircularPalindrome('mAlAyAlaM')).toBeTruthy();
  });
});
