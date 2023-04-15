/*
    12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial_Numero (p1) {
    let fatorial = 1;
    for (let indice = p1; indice > 1; indice--) {
        fatorial *= indice;
    };
    return console.log(fatorial);
};

fatorial_Numero(Math.floor(Math.random() * (10 - 1) + 1));
