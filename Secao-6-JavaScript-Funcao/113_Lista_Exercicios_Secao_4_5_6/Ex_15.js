/*
    15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
*/

function revenda (p1) {
    let opcao = null;
    if (p1.toLowerCase() == 'hatch') {
        opcao = 1;
    } else if (p1.toLowerCase() == 'sedans' || p1.toLowerCase() == 'motocicletas' || p1.toLowerCase() == 'caminhonetes'){
        opcao = 2;
    };

    switch (opcao) {
        case 1:
            return console.log(`Compra efetuada com sucesso!`);
            break;
        case 2:
            return console.log(`Tem certeza que não prefere este modelo?`);
            break;
        default:
            return console.log(`Não trabalhamos com este tipo de automóvel aqui.`);
    };
};

revenda('suv');
