/*
    14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.
*/

function frutas (p1) {
    let f = null;
    if (p1.toLowerCase() == 'maçã') {
        f = 1;
    } else if (p1.toLowerCase() == 'kiwi') {
        f = 2;
    } else if (p1.toLowerCase() == 'melancia') {
        f = 3;
    };
    
    switch (f) {
        case 1:
            return console.log(`Não vendemos esta fruta aqui!`);
            break;
        case 2:
            return console.log(`Estamos com escassez de Kiwis!`);
            break;
        case 3:
            return console.log(`Aqui está, são 3 reais o quilo!`);
            break;
        default:
            return console.log(`Erro, me diga qual fruta você quer!?`);
    };
};

frutas('melanciA');
