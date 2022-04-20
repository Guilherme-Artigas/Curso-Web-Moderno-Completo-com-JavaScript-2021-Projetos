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
