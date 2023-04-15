const valor = 'Global';

function exemplo_Funcao () {
    console.log(valor);
};

function exec () {
    const valor = 'Local';
    exemplo_Funcao();
};

exec();

// Vamos prestar atenção, que estamos chamando a função exec(), a função exec() declara uma constante com o mesmo nome (valor), porém dentro de exec() é chamado outra função a exemplo_Funcao() nela pedimos para imprimir o valor de algo, que é justamente o valor da constante (valor)... O Professor está explicando que isso é contexto léxico, ou seja, o local aonde a função foi declarada é algo extremamente importante, e será considerado na execução/exibição do código.