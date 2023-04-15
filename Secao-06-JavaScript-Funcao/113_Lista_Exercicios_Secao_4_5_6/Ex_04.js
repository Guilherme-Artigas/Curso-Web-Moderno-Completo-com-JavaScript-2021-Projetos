/*
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

function dividir (p1, p2) {
    return console.log(`Resultado da divisão: ${p1 / p2}, Resto da divisão: ${p1 % p2}`);
};

dividir(20, 3);

// Versão da resolução desse exercício utilizando arrow function

const dividir_2 = (dividendo, divisor, quociente) => {
    quociente = dividendo / divisor;
    return console.log(quociente.toFixed(1));
};

dividir_2(20, 3);
