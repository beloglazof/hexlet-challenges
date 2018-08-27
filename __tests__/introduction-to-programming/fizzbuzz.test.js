import { isFizz, isBuzz } from '../../src/introduction-to-programming/fizzbuzz';

test('is fizz?', () => {
  expect(isFizz(3)).toBeTruthy();
  expect(isFizz(9)).toBeTruthy();
  expect(isFizz(1)).toBeFalsy();
  expect(isFizz(0)).toBeFalsy();
  expect(isFizz()).toBeFalsy();
});

test('is buzz?', () => {
  expect(isBuzz(5)).toBeTruthy();
  expect(isBuzz(15)).toBeTruthy();
  expect(isBuzz()).toBeFalsy();
  expect(isBuzz(3)).toBeFalsy();
});
