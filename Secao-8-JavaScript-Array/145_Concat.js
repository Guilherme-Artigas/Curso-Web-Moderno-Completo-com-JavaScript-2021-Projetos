const filhas = ['Jurema', 'Dinora'];
const filhos = ['Uéslei', 'Bartolo'];
const todos = filhas.concat(filhos, 'Órébis');
console.log(todos, filhas, filhos); // output: [ 'Jurema', 'Dinora', 'Uéslei', 'Bartolo' ] [ 'Jurema', 'Dinora' ] [ 'Uéslei', 'Bartolo' ]

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[5, 6]]));
