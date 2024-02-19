import calculate_diagonal_sum from './testCase1';

describe('test case 1', () => {
  test('test 1 Input: 5 Output: 101', () => {
    expect(calculate_diagonal_sum(5)).toBe(101);
  });

  test('test 2 Input: 7 Output: 261', () => {
    expect(calculate_diagonal_sum(7)).toBe(261);
  });

  test('test 3 Input: 5 Output: 25', () => {
    expect(calculate_diagonal_sum(2)).toBe(25);
  });
});
