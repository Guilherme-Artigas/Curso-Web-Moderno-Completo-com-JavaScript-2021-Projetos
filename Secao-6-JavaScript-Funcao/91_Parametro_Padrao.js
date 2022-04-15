// Estratégia 1 para gerar valor padrão em parâmetros de funções. Antes da versão ES2015
function soma_1 (p1, p2, p3) {
    p1 = p1 || 0;
    p2 = p2 || 0;
    p3 = p3 || 0;
    return p1 + p2 + p3;
};

console.log(`
1º resultado: ${soma_1()}
2º resultado: ${soma_1(9)}
3º resultado: ${soma_1(1, 6)}
4º resultado: ${soma_1(0 , 8, 5)}
`);

// Estratégia 2, 3, 4 para gerar valor padrão em parâmetros de funções. Antes da versão ES2015
function soma_2 (p1, p2, p3) {
    p1 = p1 !== undefined ? p1 : 0;
    p2 = 1 in arguments ? p2 : 0;
    p3 = isNaN(p3) ? 0 : p3; // Função para identificar se o valor passado como parâmetro não é um número!
    return p1 + p2 + p3;
};

console.log(`
1º resultado: ${soma_2()}
2º resultado: ${soma_2(10)}
3º resultado: ${soma_2(8, 4)}
4º resultado: ${soma_2(7, 0, 8)}
`);

// Valores padrão a partir da versão ES2015
function soma_3 (p1 = null, p2 = null, p3 = null) {
    return p1 + p2 + p3;
};

console.log(`
1º resultado: ${soma_3()}
2º resultado: ${soma_3(7)}
3º resultado: ${soma_3(7, 9)}
4º resultado: ${soma_3(0, 11, 14)}
`);
