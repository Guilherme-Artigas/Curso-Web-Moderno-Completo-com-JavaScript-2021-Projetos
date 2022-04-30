/*
    40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

function notas (p1) {
    for (let i in p1) {
        if (p1[i] > 0 && p1[i] < 5) {
            console.log(`1º Nota: ${p1[i]} = D.`);
        } else if (p1[i] >= 5 && p1[i] < 7) {
            console.log(`2º Nota: ${p1[i]} = C.`);
        } else if (p1[i] >= 7 && p1[i] < 9) {
            console.log(`3º Nota: ${p1[i]} = B.`);
        } else if (p1[i] > 9) {
            console.log(`4º Nota: ${p1[i]} = A.`);
        };
    };
};

let a = [4.5, 6.2, 7.9, 9.5];

notas(a);
