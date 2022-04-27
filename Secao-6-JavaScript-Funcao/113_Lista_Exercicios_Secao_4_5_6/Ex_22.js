/*
    22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function anuidade (p1, p2) {
    let janeiro = p2;
    let fevereiro = janeiro + (janeiro * 5 / 100);
    let marco = fevereiro + (fevereiro * 5 / 100);
    let abril = marco + (marco * 5 / 100);
    let maio = abril + (abril * 5 / 100);
    let junho = maio + (maio * 5 / 100);
    let julho = junho + (junho * 5 / 100);
    let agosto = julho + (julho * 5 / 100);
    let setembro = agosto + (agosto * 5 / 100);
    let outubro = setembro + (setembro * 5 / 100);
    let novembro = outubro + (outubro * 5 / 100);
    let dezembro = novembro + (novembro * 5 / 100);
    
    switch (p1) {
        case 1:
            return console.log(`Pagando no mês de Janeiro o valor da sua mensalidade é R$ ${(janeiro).toFixed(1)}`);
            break;
        case 2:
            return console.log(`Pagando no mês de Fevereiro o valor da sua mensalidade é R$ ${(fevereiro).toFixed(1)}`);
            break;
        case 3:
            return console.log(`Pagando no mês de Março o valor da sua mensalidade é R$ ${(marco).toFixed(1)}`);
            break;
        case 4:
            return console.log(`Pagando no mês de Abril o valor da sua mensalidade é R$ ${(abril).toFixed(1)}`);
            break;
        case 5:
            return console.log(`Pagando no mês de Maio o valor da sua mensalidade é R$ ${(maio).toFixed(1)}`);
            break;
        case 6:
            return console.log(`Pagando no mês de Junho o valor da sua mensalidade é R$ ${(junho).toFixed(1)}`);
            break;
        case 7:
            return console.log(`Pagando no mês de Julho o valor da sua mensalidade é R$ ${(julho).toFixed(1)}`);
            break;
        case 8:
            return console.log(`Pagando no mês de Agosto o valor da sua mensalidade é R$ ${(agosto).toFixed(1)}`);
            break;
        case 9:
            return console.log(`Pagando no mês de Setembro o valor da sua mensalidade é R$ ${(setembro).toFixed(1)}`);
            break;
        case 10:
            return console.log(`Pagando no mês de Outubro o valor da sua mensalidade é R$ ${(outubro).toFixed(1)}`);
            break;
        case 11:
            return console.log(`Pagando no mês de Novembro o valor da sua mensalidade é R$ ${(novembro).toFixed(1)}`);
            break;
        case 12:
            return console.log(`Pagando no mês de Dezembro o valor da sua mensalidade é R$ ${(dezembro).toFixed(1)}`);
            break;
        default:
            return console.log(`Mês inválido!`);
    };
};

anuidade(12, 178.80);

/* Solução do professor...
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))
*/