function numero_Inteiro_Aleatorio (parametro1, parametro2) {
    const valor = Math.random() * (parametro2 - parametro1) + parametro1;
    return Math.floor(valor);
};

let opcao = 0;

while (opcao != -1) {
    opcao = numero_Inteiro_Aleatorio(-1, 10);
    console.log(opcao);
};

console.log(`Saiu do Laço!`);

// Uso adequado do while: é baseado em uma expressão verdadeira ou falsa, enquanto for verdadeiro continua e quando se tornar falso o laço para de ser executado, ideal para ser usado em situações em que se tem uma repetição indeterminada de vezes.