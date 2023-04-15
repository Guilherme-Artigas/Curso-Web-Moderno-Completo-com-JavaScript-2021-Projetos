// Solução 1

const smallerNumber = (listOfNumbers) => {
  let number = listOfNumbers[0] || 0;
  for (let i of listOfNumbers) if (i < number) number = i;
  return number;
};

console.log(smallerNumber([10, 5, 35, 65]));
console.log(smallerNumber([5, -15, 50, 3]));

// Solução 2 (Muuito mais inteligente kk)

const smallerNumber2 = (listOfNumbers) => Math.min(...listOfNumbers);

console.log(smallerNumber2([10, 5, 35, 65]));
console.log(smallerNumber2([5, -15, 50, 3]));
