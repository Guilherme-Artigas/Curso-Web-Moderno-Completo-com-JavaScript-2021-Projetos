/*
    33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

function juntar () {
    let vetorInteiro = [1, 2, 3, 4];
    let vetorString = ['Guilherme', 'Jamile', 'Rafaela', 'Julia'];
    let vetorDouble = [10.5, 23.1, 25.6, 39.7];
    let numeros = vetorInteiro.concat(vetorDouble);
    console.log(numeros);
    console.log(vetorString.concat('João', 'Junior'));
};

juntar();
