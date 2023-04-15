/*
    19) O cardápio de uma lanchonete é o seguinte:

    Código / Descrição do Produto   / Preço
    100    / Cachorro Quente        / R$ 3,00
    200    / Hambúrguer Simples     / R$ 4,00
    300    / Cheeseburguer          / R$ 5,50
    400    / Bauru                  / R$ 7,50
    500    / Refrigerante           / R$ 3,50
    600    / Suco                   / R$ 2,80

    Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.
*/

function conta (p1, p2) {
    let opcao = null;
    if (p1 == 100) {
        opcao = 0;
    } else if (p1 == 200) {
        opcao = 1;
    } else if (p1 == 300) {
        opcao = 2;
    } else if (p1 == 400) {
        opcao = 3;
    } else if (p1 == 500) {
        opcao = 4
    } else if (p1 == 600) {
        opcao = 5
    };

    switch (opcao) {
        case 0:
            return console.log(`Item: Cachorro Quente ${p2}x, total = ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 * 3)}`);
            break;
        case 1:
            return console.log(`Item: Hambúrguer Simples ${p2}x, total = ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 * 4)}`);
            break;
        case 2:
            return console.log(`Item: Cheeseburguer ${p2}x, total = ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 * 5.50)}`);
            break;
        case 3:
            return console.log(`Item: Bauru ${p2}x, total = ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 * 7.50)}`);
            break;
        case 4:
            return console.log(`Item: Refrigerante ${p2}x, total = ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 * 3.50)}`);
            break;
        case 5:
            return console.log(`Item: Suco ${p2}x, total = ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(p2 * 2.80)}`);
            break;
        default:
            return console.log(`Produto inexistente.`);
    }
};

conta(600, 4);
