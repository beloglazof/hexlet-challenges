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
