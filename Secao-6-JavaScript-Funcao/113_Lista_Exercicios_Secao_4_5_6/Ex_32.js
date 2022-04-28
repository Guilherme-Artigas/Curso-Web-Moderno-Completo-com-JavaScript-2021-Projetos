/*
    32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media () {
    let fim = Math.floor(Math.random() * (5 - 1) + 1);
    let notas = [];
    let soma = null;
    let media = null;
    for (let indice = 0 ; indice <= fim ; indice++) {
        notas.push(Math.floor(Math.random() * (10 - 1) + 1));
        soma += notas[indice];
    };
    media = soma / notas.length;
    console.log(`Lista das Notas: ${notas}`);
    console.log(`Média é ${media.toFixed(1)}`);
};

media();
