/*
    16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora (p1, p2, p3) {
    let operacao = null;
    if (p2 == '+') {
        operacao = 0;
    } else if (p2 == '-') {
        operacao = 1;
    } else if (p2 == '*') {
        operacao = 2;
    } else if (p2 == '/') {
        operacao = 3;
    };

    switch (operacao) {
        case 0:
            return console.log(`Soma entre ${p1} e ${p3} = ${p1 + p3}`);
            break;
        case 1:
            return console.log(`Subtração entre ${p1} e ${p3} = ${p1 - p3}`);
            break;
        case 2:
            return console.log(`Multiplicação entre ${p1} e ${p3} = ${p1 * p3}`);
            break;
        case 3:
            return console.log(`Divisão entre ${p1} e ${p3} = ${p1 / p3}`);
            break;
        default:
            return console.log(`Operação inválida!`);
    };
};

calculadora(10, '*',50);
