for (var indice = 0; indice < 5; indice++) {
    console.log(indice);
};
console.log(`Valor da variável indice fora do laço, usando var: ${indice}.`);
/*
    Como var tem o escopo global, e a excessão é quando ela é declarada dentro de funções, ou seja,
    nesse caso o escopo de var = indice é global, e a variável é vista por todo o código.
*/