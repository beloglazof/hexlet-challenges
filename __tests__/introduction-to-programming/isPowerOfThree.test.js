import isPowerOfThree from '../../src/introduction-to-programming/isPowerOfThree';

test('number is power of three', () => {
  expect(isPowerOfThree(1)).toBe(true);
  expect(isPowerOfThree(3)).toBe(true);
  expect(isPowerOfThree(81)).toBe(true);
  expect(isPowerOfThree(6)).toBe(false);
  expect(isPowerOfThree(15)).toBe(false);
  expect(isPowerOfThree(74)).toBe(false);
  expect(isPowerOfThree(0)).toBe(false);
  expect(isPowerOfThree(-3)).toBe(false);
  expect(isPowerOfThree(0.54)).toBe(false);
});
