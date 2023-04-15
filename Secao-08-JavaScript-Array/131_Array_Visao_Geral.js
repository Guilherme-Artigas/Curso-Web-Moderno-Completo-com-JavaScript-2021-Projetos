console.log(typeof Array, typeof new Array, typeof []); // output: function object object

console.log();


let lista1 = new Array ('Bia', 'Carlos', 'Ana');
console.log(`Lista 1: ${lista1}`);

console.log();

let lista2 = ['Guilherme', 'Rafaela', 'Julia'];
console.log(`Lista 2: ${lista2}`);
console.log(`Quem é o primeiro da lista? R: ${lista2[0]}`);
console.log(`Quem é o segundo da lista? R: ${lista2[1]}`);
console.log(`Quem é o terceiro da lista? R: ${lista2[2]}`);
console.log(`Quem é o quarto da lista? R: ${lista2[3]}`);

lista2[3] = 'Bryan';
lista2.push('Valentina');
console.log(`Verificando o tamanho da nossa lista com a propriedade length: ${lista2.length} poisções.`);

lista2[20] = 'Jamile';
console.log(`Novo tamanho da lista 2: ${lista2.length} posições.`);
console.log(lista2[13] === undefined); // output: true

console.log();

console.log(lista2);
lista2.sort(); // Organizou o array em ordem.
console.log(lista2);

delete lista2[2]; // deleta a posição e mantem a mesma ordem do array.
console.log(lista2[2]); // 
console.log(lista2[3]);

console.log();

/**.splice()
 * 1. Serve para adição de elementos em índices especificos.
 * 2. Serve para remoção de índices.
 * 3. Serve para remoção e adição de elementos ao mesmo tempo.
 */
console.log(lista1);
lista1.splice(1, 0, 'João', 'Junior');
console.log(lista1);