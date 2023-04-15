const sumList = (listNumbers) => listNumbers.reduce((acc, cur) => acc += cur, 0);

console.log(sumList([10, 10, 10]));
console.log(sumList([15, 15, 15, 15]));