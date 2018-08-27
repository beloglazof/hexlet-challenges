# FizzBuzz

Реализуйте и экспортируйте по умолчанию функцию, которая выводит в терминал числа в диапазоне от `begin` до `end`. При этом:

* Если число делится без остатка на 3, то вместо него выводится слово Fizz
* Если число делится без остатка на 5, то вместо него выводится слово Buzz
* Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
* В остальных случаях выводится само число
Функция принимает два параметра (`begin` и `end`), определяющих начало и конец диапазона (включительно). Если диапазон пуст (в случае, когда `begin` > `end`), то функция просто ничего не печатает.

[Решение](../../src/introduction-to-programming/fizzbuzz.js)

```javascript
export const isFizz = num => num % 3 === 0 && num > 0;

export const isBuzz = num => num % 5 === 0 && num > 0;

const fizzBuzz = (begin, end) => {
  if (begin > end) {
    return;
  }

  for (let i = begin; i <= end; i += 1) {
    if (isFizz(i) && isBuzz(i)) {
      console.log('FizzBuzz');
    } else if (isFizz(i)) {
      console.log('Fizz');
    } else if (isBuzz(i)) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(0, 11);
```