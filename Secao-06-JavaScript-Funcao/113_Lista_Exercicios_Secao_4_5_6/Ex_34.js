/*
    34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function comparaVetor (frase1, frase2) {
    let difere = null;
    for (let i in frase1) {
        console.log(`indice: ${i} / Valor ${frase1[i]}`);
        for (let i2 in frase2) {
            console.log(`indice 2: ${i2} / Valor 2: ${frase2[i2]}`);
            if (i == i2 && frase1[i].toLowerCase() != frase2[i2].toLowerCase()) {
                difere += 1;
            };
        };
    };
    if (difere == null) {
        return console.log(`Os dois vetores possuem o mesmos valores? ${true}`);
    } else {
        return console.log(`Os dois vetores possuem o mesmos valores? ${false}`);
    };
};

let vetor1 = ['a', 'b', 'C'];
let vetor2 = ['A', 'g', 'c', 'q', 'p'];

comparaVetor(vetor1, vetor2);
