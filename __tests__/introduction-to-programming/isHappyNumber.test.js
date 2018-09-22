import isHappy from '../../src/introduction-to-programming/isHappyNumber';

test('is number huppy', () => {
  expect(isHappy(7)).toBeTruthy();
  expect(isHappy(1)).toBeTruthy();
  expect(isHappy(-1)).toBeTruthy();
  expect(isHappy(2)).toBeFalsy();
  expect(isHappy(0)).toBeFalsy();
});
