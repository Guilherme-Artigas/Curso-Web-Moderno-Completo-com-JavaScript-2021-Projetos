const onlyEven = (list) => list.filter((element, index) => {
  if (element % 2 === 0 && index % 2 === 0) return element;
});

console.log(onlyEven([1, 2, 3, 4]));
console.log(onlyEven([10, 70, 22, 43]));
