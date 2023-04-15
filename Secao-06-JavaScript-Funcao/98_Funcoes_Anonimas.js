const soma_1 = function (parametro1_funcao_soma, parametro2_funcao_soma) {
    return parametro1_funcao_soma + parametro2_funcao_soma;
};

const saida_Tela = function (parametro1_funcao_saida_Tela, parametro2_funcao_saida_Tela, operacao = soma_1) {
    console.log(operacao(parametro1_funcao_saida_Tela, parametro2_funcao_saida_Tela));
};

saida_Tela(25, 49); // 74
saida_Tela(29, 81, soma_1); // 110
saida_Tela(13, 18, function (parametro1_funcao_anonima, parametro2_funcao_anonima) {
    return parametro1_funcao_anonima - parametro2_funcao_anonima;
}); // -5

saida_Tela(3, 4, (parametro1_arrow_function, parametro2_arrow_function) => parametro1_arrow_function * parametro2_arrow_function); // 12

const pessoa = {
    falar: function () {
        console.log(`Oi!`)
    }
};

pessoa.falar();
