const square = num => num ** 2;

const sumOfSquareDigits = (num) => {
  const absNum = Math.abs(num);
  const stringifyNum = String(absNum);
  const numLength = stringifyNum.length;
  let result = 0;

  if (numLength === 1) {
    result += square(absNum);
  } else {
    for (let i = 0; i < numLength; i += 1) {
      result += square(Number(stringifyNum[i]));
    }
  }

  return result;
};

const isHappyNumber = (num, count = 1) => {
  const n = sumOfSquareDigits(num);
  if (count > 10) {
    return false;
  }

  if (n === 1) {
    return true;
  }
  do {
    return isHappyNumber(n, count + 1);
  } while (count <= 10);
};

export default isHappyNumber;
