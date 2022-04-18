// function declaration
function soma (p1, p2) {
    return p1 + p2;
};

// function expression
const subtracao = function (p1, p2) {
    return p1 - p2;
};

// named function expression, segundo professor Leonardo essa declaração é muito pouco usada/vista em códigos.
const multiplicao = function mult (p1, p2) {
    return p1 * p2;
};

// O professor explicou que a primeira e a segunda declaração são mais comuns de serem vistas nos códigos, a declaração "function declaration" pode ser colocada abaixo de uma linha que a invoque, isso por que Javascript quando começa a depuração coloca todas as "function declarations" no topo do código e depois começa a execução das outras linhas, isso não acontece na "function expression" e nem na "named function expression", caso tentarmos chama a 2º e 3º forma de declaração antes de declara-la nosso código irá dar erro.