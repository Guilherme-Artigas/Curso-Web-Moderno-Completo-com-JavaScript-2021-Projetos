/*
    07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”.
*/

// 3x² - 5x + 12 = 0
// a = 3
// b = -5
// c = 12

// delta = (-5)² - 4 * 3 * 12
// delta = 25 - 144
// delta = -119

// Se o delta der resultado negativo, não tem como continuar o calculo.
// Se o delta der positivo o calculo segue da seguinte maneira.

// x = (-b +- raiz(delta)) / (2 * a);
// x = (-b + raiz(delta)) / (2 * a);
// x = (-b - raiz(delta)) / (2 * a);

function formula_Bhaskara (ax2, bx, c) {
    const delta = (-bx) ** 2 - 4 * ax2 * c;
    const resultado = [];
    if (delta >= 0) {
        resultado[0] = (-bx + Math.sqrt(delta)) / (2 * ax2);
        resultado[1] = (-bx - Math.sqrt(delta)) / (2 * ax2);
        return resultado;
    } else if (delta < 0) {
        return 'Delta é negativo!';
    };
};

console.log(formula_Bhaskara(2, -16, -18));
