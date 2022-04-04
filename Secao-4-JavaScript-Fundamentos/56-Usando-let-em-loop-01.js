for (let indice = 0; indice < 5; indice++) {
    console.log(indice);
};
// console.log(`Valor da variável indice fora do laço, usando var: ${indice}.`);

/*
    let diferentemente de var, possui escopo de bloco, nesse código a linha 4 vai nos apresentar um erro, dizendo que indice não foi definido, quando na verdade foi, porém está com escopo local dentro do laço de repetição for, portanto não é vista / reconhecida / enxergada fora do bloco for.
*/