const multiply = (numberOne, numberTwo) => {
  if (numberOne === 0 || numberTwo === 0) return 0;
  let mult = 1;
  for (let i = 0; i < numberTwo; i++) {
    mult += numberOne;
  }
  return mult - 1;
}

console.log(multiply(5, 5));
console.log(multiply(0, 7));
