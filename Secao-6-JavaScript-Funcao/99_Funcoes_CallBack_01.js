function bloco_1 () {
    // aguardar 5 segundos.
    setTimeout(function () {
        console.log(`Esse é o primeiro bloco de comandos após 5 segundos!`);
    }, 5000);
};

function bloco_2 () {
    console.log(`Esse é o segundo bloco de comandos.`);
};

bloco_1();
bloco_2();

function exibir_Msg_Ordem_Correta (parametro1, parametro2) {
    console.log(parametro1);
    parametro2();
};

exibir_Msg_Ordem_Correta('Essa é a primeira mensagem exibida na ordem.', function () {
    console.log('Essa é a segunda mensagem exibida na ordem.');
});

function exibir_Primeira_Msg (parametro1, parametro2) {
    console.log(parametro1);
    parametro2();
};

function exibir_Segunda_Msg () {
    console.log('Essa é a segunda mensagem do novo exemplo.');
};

exibir_Primeira_Msg('Essa é a primeira mensagem do novo exemplo', exibir_Segunda_Msg);

// var fs = require('fs');
// console.log('Primeiro comando');
// fs.readFile('./arquivo.txt', callback);
// function callback (err, conteudo) {
//     if (err) return console.error(err);
//     console.log(String(conteudo));
// };

// console.log('Segundo comando');
// console.log('Terceiro comando');



// -------------------------------------------------------------------------------
// Exemplo do Curso Desenvolvimento Web - Udemy (Professor Leonardo Moura Leitão).

// const fabricantes = ['Mercedes', 'Audi', 'BMW'];

// function exibir (nome, indice) {
//     console.log(`${indice + 1}. ${nome}`);
// };

// fabricantes.forEach(exibir);
