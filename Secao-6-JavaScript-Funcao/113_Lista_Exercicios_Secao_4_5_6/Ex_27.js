/*
    27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function taxaCrescimento (altura1, taxaC1, altura2, taxaC2) {
    let dTaxa = null;
    let indic = 1;
    if (altura1 > altura2 && taxaC1 < taxaC2) {
        // significa que a criança2 vai passar a criança1 em altura.
        if (taxaC1 > taxaC2) {
            dTaxa = taxaC1 - taxaC2;
        } else if (taxaC2 > taxaC1) {
            dTaxa = taxaC2 - taxaC1;
        };

        while (altura2 <= altura1) {
            console.log(`Quantidade de tempo em ano(s): ${indic}`);
            altura2 += dTaxa;
            indic += 1;
        };
    };

    if (altura1 < altura2 && taxaC1 > taxaC2) {
        // significa que a criança1 vai passar a criança2 em altura.
        if (taxaC1 > taxaC2) {
            dTaxa = taxaC1 - taxaC2;
        } else if (taxaC2 > taxaC1) {
            dTaxa = taxaC2 - taxaC1;
        };

        while (altura1 <= altura2) {
            console.log(`Quantidade de tempo em ano(s): ${indic}`);
            altura1 += dTaxa;
            indic += 1;
        };
    };

    if (taxaC1 == taxaC2) {
        console.log(`É impossivel uma criança passar a outra em altura, pois as duas possuem a mesma taxa de crescimento anual.`)
    };
};

taxaCrescimento(185, 2, 200, 2);
