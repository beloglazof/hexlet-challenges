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

export default fizzBuzz;
