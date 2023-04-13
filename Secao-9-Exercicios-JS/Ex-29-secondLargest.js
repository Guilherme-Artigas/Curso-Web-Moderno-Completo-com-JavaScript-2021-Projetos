const secondLargest = (listOfNumbers) => {
  const n = listOfNumbers.length - 2;
  return listOfNumbers.sort((a, b) => a - b)[n];
}

console.log(secondLargest([12, 16, 1, 5]));
console.log(secondLargest([8, 4, 5, 6]));
