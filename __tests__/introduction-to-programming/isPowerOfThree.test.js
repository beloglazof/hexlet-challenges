import isPowerOfThree from '../../src/introduction-to-programming/isPowerOfThree';

test('number is power of three', () => {
  expect(isPowerOfThree(1)).toBeTruthy();
  expect(isPowerOfThree(3)).toBeTruthy();
  expect(isPowerOfThree(81)).toBeTruthy();
  expect(isPowerOfThree(6)).toBeFalsy();
  expect(isPowerOfThree(15)).toBeFalsy();
  expect(isPowerOfThree(74)).toBeFalsy();
  expect(isPowerOfThree(0)).toBeFalsy();
  expect(isPowerOfThree(-3)).toBeFalsy();
  expect(isPowerOfThree(0.54)).toBeFalsy();
});
