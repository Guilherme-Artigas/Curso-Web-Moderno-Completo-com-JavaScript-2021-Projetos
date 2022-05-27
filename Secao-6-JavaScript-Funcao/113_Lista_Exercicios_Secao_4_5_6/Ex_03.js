/*
    03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function exponenciacao (p1, p2) {
    return console.log(p1 ** p2);
};

exponenciacao(2, 3);

// Versão da resolução desse exercício utilizando arrow function

const exponencicao_2 = (base, expoente) => console.log(base ** expoente);

exponencicao_2(3, 4);
