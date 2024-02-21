import UnveilingTheSecrets from './testCase4';

describe('Test case 4', () => {
  // d(75) = 75 + 7 + 5 = 87
  test('Case 1', () => {
    expect(UnveilingTheSecrets(75)).toBe(87);
  });
    
  // d(10) = 10 + 1 + 0 = 11
  test('Case 2', () => {
    expect(UnveilingTheSecrets(10)).toBe(11);
  });
});
