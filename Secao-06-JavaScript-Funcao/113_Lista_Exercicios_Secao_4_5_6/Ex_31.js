/*
    31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
*/

function quantidadeNegativos () {
    let fim = Math.floor(Math.random() * (100 - 1) + 1);
    let listaNumeros = [];
    let qNegativos = null;
    for (let indice = 0 ; indice <= fim ; indice++) {
        listaNumeros.push(Math.floor(Math.random() * 101 - 50));
        if (listaNumeros[indice] < 0) {
            qNegativos += 1;
        };
    };
    console.log(`Lista de números é ${listaNumeros}`)
    console.log(`Quantidade de números negativos contidos na lista é ${qNegativos}`);
};

quantidadeNegativos();
