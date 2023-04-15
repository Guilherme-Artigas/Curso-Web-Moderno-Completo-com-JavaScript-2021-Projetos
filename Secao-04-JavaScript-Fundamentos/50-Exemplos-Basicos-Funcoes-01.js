// Função sem retorno
function imprimirSoma(p1, p2) {
    console.log(p1 + p2);
};

imprimirSoma(2, 3); // Retorno: 5
imprimirSoma(2); // Retorno: Nan, pois, o segundo valor foi tratado como undefined.
imprimirSoma(10, 20, 1, 5, 8, 15); // Retorno: 30, soma os dois argumentos e ignora os outros.
imprimirSoma(); // Retorna: NaN, trata os dois valores como undefined.

// Função com retorno, quando queremos armazenar o resultado em uma variável
function soma(p1 = null, p2 = null) {
    return console.log(p1 + p2);
};

soma(8);