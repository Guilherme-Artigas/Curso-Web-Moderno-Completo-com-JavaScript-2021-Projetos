const findByDigits = (list, digits) => list.filter(n => n.toFixed().length === digits);

console.log(findByDigits([38, 2, 365, 10, 125, 11], 2));
console.log(findByDigits([5, 9, 1, 125, 11], 1));
