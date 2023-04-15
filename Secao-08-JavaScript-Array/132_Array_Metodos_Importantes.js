const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// Removendo o ultimo elemento de um array com .pop()...
pilotos.pop();
console.log(pilotos); // output: [ 'Vettel', 'Alonso', 'Raikkonen' ]
console.log(`--------------------------------------------`);

// Adicionando algo ao final de um array com .push()...
pilotos.push('Verstappen');
console.log(pilotos); // output: [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(`--------------------------------------------`);

// Removendo o primeiro elemento de um array com .shift()...
pilotos.shift();
console.log(pilotos); // output: [ 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(`--------------------------------------------`);

// Adicionando algo no inicio da lista com .unshift...
pilotos.unshift('Hamilton');
console.log(pilotos); // output: [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(`--------------------------------------------`);

// .splice() pode ser usado para adição e remoção de elementos de arrays, tudo depende dos parâmetros passados...
// 1º Exemplo adicionando elementos em posições especificas com .splice()...
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos); // output: [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
console.log(`--------------------------------------------`);

// 2º Exemplo removendo elementos em posições especificas com .splice()...
pilotos.splice(3, 1);
console.log(pilotos); // output: [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
console.log(`--------------------------------------------`);

// Selecionando pedaços especificos de arrays e colocando-os em novos arrays, com .slice()...
// 1º Exemplo...
const lista_pilotos1 = pilotos.slice(3); // (Gera novo Array)
console.log(lista_pilotos1); // output: [ 'Raikkonen', 'Verstappen' ]
console.log(`--------------------------------------------`);

// 2º Exemplo... 
const lista_pilotos2 = pilotos.slice(0, 4); // (Gera novo Array)
console.log(lista_pilotos2); // output: [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen' ]
console.log(`--------------------------------------------`);