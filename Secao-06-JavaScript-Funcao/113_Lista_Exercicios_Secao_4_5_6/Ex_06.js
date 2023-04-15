/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

function juros_Simples (capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * taxaJuros / 100);
};

// console.log(juros_Simples(3000, 3));

function juros_Compostos (capitalInicial, taxaJuros, tempoAplicacao) {
    const montante1 = capitalInicial + (capitalInicial * taxaJuros / 100);
    const montante2 = montante1 + (montante1 * taxaJuros / 100);
    const montante3 = montante2 + (montante2 * taxaJuros / 100);
    const montante4 = montante3 + (montante3 * taxaJuros / 100);
    switch (tempoAplicacao) {
        case 1:
            return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(montante1);
            break;
        case 2:
            return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(montante2);
            break;
        case 3:
            return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(montante3);
            break;
        case 4:
            return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(montante4);
            break;
        default:
            return 'Por favor digite o valor do capital R$ ----, depois a taxa de juros, e por fim o tempo de aplicação entre 1 à 4 anos.';
    };
};

console.log(juros_Compostos(4000, 11, 1));
