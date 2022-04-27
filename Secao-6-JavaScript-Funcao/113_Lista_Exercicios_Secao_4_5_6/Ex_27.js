/*
    27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function taxaCrescimento (altura1, taxaC1, altura2, taxaC2) {
    let menor = null;
    let dTaxa = null;
    let dAltu = null;
    let indic = null;
    if (altura1 < altura2) {
        menor = altura1;
    } else if (altura2 < altura1) {
        menor = altura2;
    };

    if (taxaC1 != taxaC2) {
        if (taxaC1 > taxaC2) {
            dTaxa = taxaC1 - taxaC2;
        } else if (taxaC2 > taxaC1) {
            dTaxa = taxaC2 - taxaC1;
        };

        if (altura1 > altura2) {
            dAltu = altura1 - altura2;
            while (altura1 >= altura2) {
                altura2 += dTaxa;
                indic += 1;
            };
            return console.log(`Criança 1 é maior que a criança 2, tem taxas de crescimento diferentes! Criança 2 passara a criança 1 em ${indic} anos`);
        } else if (altura2 > altura1) {
            dAltu = altura2 - altura1;
            while (altura2 >= altura1) {
                altura1 += dTaxa;
                indic += 1;
            };
            return console.log(`Criança 2 é maior que a criança 1, tem taxas de crescimento diferentes! Criança 1 passara a criança 2 em ${indic} anos`);
        };

    } else {
        console.log(`As crianças tem a mesma taxa de crescimento, portanto é impossível de uma passar a outra em altura!`);
    };
    //return console.log(`${indic}`);
};

taxaCrescimento(150, 2, 130, 4);
// 152, 134
// 154, 138
// 156, 142
// 158, 146
// 160, 150
// 162, 154
// 164, 158
// 166, 162
// 168, 166
// 170, 170
// 172, 174, precisou de 11 anos