console.log('01)', '1' == 1); // True
// Na linha acima o teste lógico é feito para descobrir se os valores são iguais, lembrando que JS é fracamente tipado.
console.log('02)', '1' === 1); // False
// Na linha acima com 3 iguais estamos testando se alem de valores iguais, eles são do mesmo tipo. Nesse caso não são.
console.log('03)', '3' != 3); // False
// Na linha acima estamos perguntando se '3' tem o valor diferente de 3, o resultado é false, os dois tem o mesmo valor.
console.log('04)', '3' !== 3); // True
// Na linha acima estamos perguntando se '3' é do tipo diferente de 3, o resultado é true, '3' string e 3 é numérico.
console.log('05)', 5 < 1); // false (< menor que).
console.log('06)', 10 > 2); // true (> maior que).
console.log('07)', 9 <= 3); // false (<= menor ou igual á).
console.log('08)', 8 >= 0); // true (>= maior ou igual á).
const data1 = new Date(0);
const data2 = new Date(0);
console.log('09)', data1 == data2); // false
console.log('10)', data1 === data2); // false
console.log('11)', data1.getTime() === data2.getTime()); // true
console.log('12)', undefined == null); // true
console.log('13)', undefined === null); // false