const reverseResult = (boolOrNumber) => {
  if (typeof boolOrNumber === 'boolean') return !boolOrNumber;
  if (typeof boolOrNumber === 'number') return boolOrNumber - boolOrNumber * 2;
  return `Booleano ou numérico esperados, valor recebido é do tipo ${typeof boolOrNumber}`;
}

console.log(reverseResult(false));
console.log(reverseResult(555));
console.log(reverseResult('OI'));
