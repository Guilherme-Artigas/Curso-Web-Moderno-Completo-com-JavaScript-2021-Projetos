/*
    01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function calculo (p1, p2) {
    return console.log(`
    Soma: ${p1 + p2}
    Subt: ${p1 - p2}
    Mult: ${p1 * p2}
    Divi: ${p1 / p2}`);
};

calculo(20, 2);

// Versão da resolução desse exercício utilizando arrow function

const calculo_1 = (arg1, arg2) => {
    return console.log(`
    Soma: ${arg1 + arg2}
    Subt: ${arg1 - arg2}
    Mult: ${arg1 * arg2}
    Divi: ${arg1 / arg2}`);
};

calculo_1(5, 8);
