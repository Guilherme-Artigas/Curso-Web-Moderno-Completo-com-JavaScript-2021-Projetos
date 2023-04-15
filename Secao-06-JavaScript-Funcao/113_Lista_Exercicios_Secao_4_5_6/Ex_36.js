/*
    36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
*/

function f1 (p1, p2) {
    let vetorM = [];
    for (let i in p1) {
        vetorM.push(p1[i] * p2);
    };
    return vetorM;
};

function f2 (p1, p2) {

};

let arg1 = [2, 3, 5, 6, 9];
let arg2 = 5;

console.log(f1(arg1, arg2));

/*
let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
*/