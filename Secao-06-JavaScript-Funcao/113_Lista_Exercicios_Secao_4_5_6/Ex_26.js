/*
    26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function pares () {
    for (let indice = 1; indice <= 100; indice++) {
        if (indice % 2 == 0) {
            console.log(indice);
        };
    };
};

pares();
