/*
    21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
    
    1) crianças com menos de 10 anos pagam R$80;
    2) conveniados com idade entre 10 e 30 anos pagam R$50;
    3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
    4) conveniados acima de 60 anos pagam R$130
*/

function valor_Plano (p1) {
    if (p1 < 10) {
        return console.log(`Crianças pagam R$ ${100 + 80}`);
    } else if (p1 >= 10 && p1 <= 30) {
        return console.log(`Crianças acima de 10 anos e adultos até 29 anos pagam R$ ${100 + 50}`);
    } else if (p1 > 30 && p1 <= 60) {
        return console.log(`Adultos entre 30 e 59 anos pagam R$ ${100 + 95}`);
    } else if (p1 > 60) {
        return console.log(`Idosos acima de 60 anos pagam R$ ${100 + 130}`);
    } else {
        return console.log(`Idade digitada inválida!`);
    };
};

valor_Plano(65);
