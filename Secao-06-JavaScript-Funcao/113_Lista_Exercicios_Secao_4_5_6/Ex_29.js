/*
    29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo () {
    let fim = Math.floor(Math.random() * (10 - 1) + 1);
    let lista = [];
    let dentro = 0;
    let fora = 0;
    for (let indice = 0 ; indice <= fim ; indice++) {
        lista.push(Math.floor(Math.random() * (100 - 1) + 1));
        if (lista[indice] >= 10 && lista[indice] <= 20) {
            dentro += 1;
        } else {
            fora += 1;
        };
    };
    console.log(`Lista ${lista}`);
    console.log(`Quantidade de números entre 10 e 20 que estão na lista é ${dentro}`);
    console.log(`Quantidade de números que estão fora do intervalo entre 10 e 20 e que estão na lista é ${fora}`);
};

intervalo();
