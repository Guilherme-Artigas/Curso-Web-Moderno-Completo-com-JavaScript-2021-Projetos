const biggerOrEqual = (firstNumber, secondNumber) =>
  typeof firstNumber === typeof secondNumber && firstNumber >= secondNumber;

console.log(biggerOrEqual(0, 0));
console.log(biggerOrEqual(0, '0'));
console.log(biggerOrEqual(5, 1));
