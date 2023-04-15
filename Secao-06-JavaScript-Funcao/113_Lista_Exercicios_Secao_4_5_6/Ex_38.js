/*
    38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function numerosImpares (inicio = 0, fim = 100) {
    let indice = null;
    let i = null;
    let f = null;
    if (inicio < fim) {
        i = inicio;
        f = fim;
        for (indice = i; indice <= f ; indice++) {
            if (indice % 2 != 0) {
                console.log(indice);
            };
        };
    } else {
        i = inicio;
        f = fim;
        for (indice = i ; indice >= f ; indice--) {
            if (indice % 2 != 0) {
                console.log(indice);
            };            
        };
    };
};

numerosImpares(100, 0);
