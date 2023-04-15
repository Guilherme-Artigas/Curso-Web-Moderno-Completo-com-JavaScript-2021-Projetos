/*
    30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor () {
    let fim = Math.floor(Math.random() * (10 - 1) + 1);
    let listaNumeros = [];
    let maior = null;
    let menor = null;
    for (let indice = 0 ; indice <= fim ; indice++) {
        listaNumeros.push(Math.floor(Math.random() * (100 - 1) + 1));
        if (indice == 0) {
            maior = listaNumeros[indice];
            menor = listaNumeros[indice];
        } else if (listaNumeros[indice] > maior) {
            maior = listaNumeros[indice];
        } else if (listaNumeros[indice] < menor) {
            menor = listaNumeros[indice];
        };
    };
    console.log(`Lista de numeros: ${listaNumeros}`);
    console.log(`Maior valor encontrado na lista foi ${maior}`);
    console.log(`Menor valor encontrado na lista foi ${menor}`);
};

maiorMenor();
