/*
    24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/

function hello () {
    let indice = 0;
    while (indice <= 11) {
        console.log(`Hello World! ${indice}º`);
        indice++;
    };
};

hello();