import calculate_diagonal_sum from './testCase1';

describe('test case 1', () => {
  test('test case 1 Input: 5 Output: 101', () => {
    expect(calculate_diagonal_sum(5)).toBe(5);
  });
});
