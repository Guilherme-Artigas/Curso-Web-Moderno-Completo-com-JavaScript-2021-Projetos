/*
    17) Um funcionário irá receber um aumento de acordo com o seu plano de
    trabalho, de acordo com a tabela abaixo:

    Plano / Aumento
    A     / 10%
    B     / 15%
    C     / 20%

    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento_Salario (p1, p2) {
    let opcao = null;
    if (p1.toUpperCase() == 'A') {
        opcao = 0;
    } else if (p1.toUpperCase() == 'B') {
        opcao = 1;
    } else if (p1.toUpperCase() == 'C') {
        opcao = 2;
    };

    switch (opcao) {
        case 0:
            return console.log(`Funcionário plano ${p1} salário antigo ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2)} com aumento de 10%, novo salário é ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 + (p2 * 10 / 100))}`);
            break;
        case 1:
            return console.log(`Funcionário plano ${p1} salário antigo ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2)} com aumento de 15%, novo salário é ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 + (p2 * 15 / 100))}`);
            break;
        case 2:
            return console.log(`Funcionário plano ${p1} salário antigo ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2)} com aumento de 20%, novo salário é ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 + (p2 * 20 / 100))}`);
            break;
        default:
            return console.log(`Funcionário com plano inválido!`);
    };
};

aumento_Salario('B', 5000);
