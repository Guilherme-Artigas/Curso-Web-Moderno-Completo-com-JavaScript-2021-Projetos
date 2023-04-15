function tratarErroELancar(erro) {
    // throw new Error('...');
    // throw 10;
    // throw true;
    // throw 'Mensagem';
    throw {
        Nome: erro.name,
        Msg: erro.message,
        Data: new Date
    }
}

function imprimirNomeGritado(parametro1) {
    try {
        console.log(parametro1.name.toUpperCase() + '!!!');
        /*
            try é um bloco de código que podemos colocar alguma sentença que nós julgamos que pode dar algum tipo de erro, se realmente gerar esse erro e quisermos tratar esse erro, precismos associar ao bloco try (tentar)...
        */
    } catch (e) {
        tratarErroELancar(e)
        /*
            Precisamos associar a um bloco try um bloco catch (e).
        */
    } finally {
        console.log('Ocorrendo erro ou não eu serei executado com finally. :)')
    }
}

const objeto_exemplo = {nome: 'Guilherme'};
imprimirNomeGritado(objeto_exemplo);
