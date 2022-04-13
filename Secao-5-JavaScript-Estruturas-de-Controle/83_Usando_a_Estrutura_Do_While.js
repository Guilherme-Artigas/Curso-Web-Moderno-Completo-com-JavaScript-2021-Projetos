function numero_Aleatorio (parametro1, parametro2) {
    const numero = Math.random() * (parametro2 - parametro1) + parametro1;
    return Math.floor(numero);
};

let sair_laco = null;

do {
    sair_laco = numero_Aleatorio(-1, 5);
    console.log(`Valor: ${sair_laco}.`);
    if (sair_laco === -1) {
        console.log(`... Saindo do laço!`);
    };
} while (sair_laco != -1);

// Segundo comentário do professor Leonardo, o uso da estrutura do {} while () é bem baixo.