const repeatPlusPlus = (quantity) => {
  let count = '';
  for (let i = 0; i < quantity; i++) count += '+';
  return count;
}

console.log(repeatPlusPlus(2));
console.log(repeatPlusPlus(4));