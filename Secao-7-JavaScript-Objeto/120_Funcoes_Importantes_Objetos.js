const pessoa = {
    nome: 'Guilherme',
    idade: 30,
    peso: 100.1
};

// Object.Keys(): Retorna o nome de todas as chaves de determinado objeto passado como valor/parametro.
console.log(Object.keys(pessoa));
// Object.values(): Retorna todos os valores de determinado objeto passado como valor/parametro/argumento.
console.log(Object.values(pessoa));
// Object.entries(): Retorna uma matriz de chaves/valores das propriedades enumeráveis de um objeto.
console.log(Object.entries(pessoa));
// Desestruturando um array, usando operador destructuring
Object.entries(pessoa).forEach (([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
// Definindo uma propriedade de uma forma mais personalizada, dizendo se ela ira aparecer no lista das chaves e dizendo se o valor pode ser reescrito ou não.
Object.defineProperty(pessoa, 'Nasc', {
    enumerable: true,
    writable: false,
    value: '06/02/1992'
});

pessoa.Nasc = '06/02/2000';
console.log(pessoa);

// Object.assign (ECMAScript 2015) atribui ao destino os valores dos outros objetos apontados como target.
const destino = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3};
const o3 = {d: 1, a: 5};
const objeto = Object.assign(destino, o1, o2, o3);
