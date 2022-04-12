function cuidado_1(parametro) {
    if (parametro > 7) {
        console.log(parametro);
        console.log(`.`)
    }
    console.log('...');
    /*
        Quando queremos associar varias sentenças de código devemos obrigatoriamente usar chaves, caso não usemos chaves a sentença que esta logo em seguida a declaração if será a unica considerada.
    */
};

// cuidado_1(5);
// cuidado_1(10);

function cuidado_2(parametro) {
    if (parametro > 10); { // Cuidado, com esse código estamos desassociando o bloco que imprime informações na tela e teremos um erro de lógica.
        console.log(parametro);
    };
};

cuidado_2(9);
cuidado_2(15);