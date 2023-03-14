const isBetween = (minValue, maxValue, value, inclusive = false) => {
  if (inclusive) return value >= minValue && value <= maxValue;
  return value > minValue && value < maxValue;
};

console.log(isBetween(10, 100, 50));
console.log(isBetween(16, 100, 160));
console.log(isBetween(3, 150, 3));
console.log(isBetween(3, 150, 3, true));

