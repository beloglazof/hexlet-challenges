# Степень тройки

Реализуйте функцию `isPowerOfThree`, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень, а 81 это четвертая.

[Решение](../../src/introduction-to-programming/isPowerOfThree.js)

```javascript
const isPowerOfThree = (num) => {
  switch (num) {
    case 1:
    case 3:
      return true;

    case num < 0:
    case 0:
      return false;

    default:
      return (num / 3) % 3 === 0;
  }
};

export default isPowerOfThree;
```