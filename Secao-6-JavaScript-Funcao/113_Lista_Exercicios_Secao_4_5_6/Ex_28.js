/*
    28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function lista () {
    let fim = Math.floor(Math.random() * (10 - 1) + 1);
    let listaNumerosInteiros = [];
    let pares = null;
    let impares = null;
    for (let indice = 0; indice <= fim; indice++) {
        listaNumerosInteiros.push(Math.floor(Math.random() * (100 - 1) + 1));
        if (listaNumerosInteiros[indice] % 2 == 0) {
            pares += 1;
        } else {
            impares += 1;
        };
    };
    console.log(`Lista de números gerados aleatoriamente pelo sistema: ${listaNumerosInteiros}`);
    console.log(`Quantidade de números pares encontrados na lista é ${pares}`);
    console.log(`Quantidade de números ímpares encontrados na lista é ${impares}`);
};

lista();
