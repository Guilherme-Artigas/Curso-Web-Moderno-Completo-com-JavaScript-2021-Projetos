/*
    20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10, R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$ 18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function saque (p1) {
    let n_Cem = null;
    let n_Cinquenta = null;
    let n_Dez = null;
    let n_Cinco = null;
    let n_Um = null;
    for (let indice = p1; indice > 0; indice--) {
        if (p1 >= 100) {
            p1 -= 100;
            n_Cem += 1;
        } else if (p1 >= 50) {
            p1 -= 50;
            n_Cinquenta += 1;
        } else if (p1 >= 10) {
            p1 -= 10;
            n_Dez += 1;
        } else if (p1 >= 5) {
            p1 -= 5;
            n_Cinco += 1;
        } else if (p1 >= 1) {
            p1 -= 1;
            n_Um += 1;
        };
    };

    if (n_Cem != null) {
        console.log(`${n_Cem} nota(s) de R$ 100`);
    };
    if (n_Cinquenta != null) {
        console.log(`${n_Cinquenta} nota(s) de R$ 50`);
    };
    if (n_Dez != null) {
        console.log(`${n_Dez} nota(s) de R$ 10`);
    };
    if (n_Cinco != null) {
        console.log(`${n_Cinco} nota(s) de R$ 5`);
    };
    if (n_Um != null) {
        console.log(`${n_Um} nota(s) de R$ 1`);
    };
};

saque(1212);
