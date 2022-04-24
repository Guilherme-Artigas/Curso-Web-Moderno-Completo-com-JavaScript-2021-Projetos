/*
    13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function dia_Semana () {
    const pega_Data = new Date();
    const dia = pega_Data.getDay();
    switch (dia) {
        case 0:
            return console.log(`Hoje é domingo, fim de semana!`);
            break;
        case 1:
            return console.log(`Hoje é segunda-feira, dia útil!`);
            break;
        case 2:
            return console.log(`Hoje é terça-feira, dia útil!`);
            break;
        case 3:
            return console.log(`Hoje é quarta-feira, dia útil!`);
            break;
        case 4:
            return console.log(`Hoje é quinta-feira, dia útil!`);
            break;
        case 5:
            return console.log(`Hoje é seeextou, dia útil!`);
            break;
        case 6:
            return console.log(`Hoje é sabado, fim de semana`);
            break;
        default:
            return console.log(`Dia inválido!`)
    };
};
dia_Semana();
