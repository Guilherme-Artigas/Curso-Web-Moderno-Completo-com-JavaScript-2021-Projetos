// Armazenando uma função em uma variável
const imprimirSoma = function (p1, p2) {
    console.log(p1 + p2);
};

imprimirSoma(5, 10);

// Armazenando uma função arrow em uma variável
const soma = (p1, p2) => {
    return p1 + p2;
};

console.log(soma(10, 25));

// Retorno implícito
const subtracao = (p1, p2) => p1 - p2;

console.log(subtracao(55, 31));