console.log(typeof String); // output: function
console.log(typeof Array); // output: function
console.log(typeof Object); // output: function
console.log(`-----------------------------------------------------------`);


String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};
console.log('Nome ao contrario: Guilherme Artigas fica ' + 'Guilherme Artigas'.reverse());
console.log(`-----------------------------------------------------------`);

Array.prototype.first = function () {
    return this[0];
};
console.log('Primeiro elemento de um array: ' + [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].first());
console.log(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].first());
console.log(`-----------------------------------------------------------`);

String.prototype.toString = function () {
    return 'Lascou tudo';
};

console.log('Escola Cod3r'.reverse());
