/*
    02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function formato_Triangulo (p1, p2, p3) {
    if (p1 === p2 && p2 === p3 && p1 === p3) {
        return console.log(`Esse triângulo é Equilátero!`);
    } else if (p1 === p2 || p2 === p3 || p1 === p3) {
        return console.log(`Esse triângulo é Isóceles!`);
    } else if (p1 !== p2 && p2 !== p3 && p1 !== p3) {
        return console.log(`Esse triângulo é Escaleno!`);
    };
};

formato_Triangulo(4, 5, 6);

// Versão da resolução desse exercício utilizando arrow function

const formato_Triangulo2 = (lado1, lado2, lado3) => {
    let formato = null;
    if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3) {
        formato = 'Equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        formato = 'Isóceles';
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        formato = 'Escaleno';
    };
    return console.log(`O formato do triângulo com os valores passados, resultou em um triângulo ${formato}`);
};

formato_Triangulo2(3, 6, 6);
