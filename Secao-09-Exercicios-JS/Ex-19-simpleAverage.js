const simpleAverage = (listOfNumbers) =>
  listOfNumbers.reduce((acc, cur) => acc += cur, 0) / listOfNumbers.length;

console.log(simpleAverage([0, 10]));
console.log(simpleAverage([1, 2, 3, 4, 5]));
