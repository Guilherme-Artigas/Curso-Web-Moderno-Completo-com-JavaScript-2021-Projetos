const filterNumber = (list) => list.filter((element) => typeof element === 'number');

console.log(filterNumber(['javascript', 1, '3', 'web', 20]));
console.log(filterNumber(['a', 'b']));