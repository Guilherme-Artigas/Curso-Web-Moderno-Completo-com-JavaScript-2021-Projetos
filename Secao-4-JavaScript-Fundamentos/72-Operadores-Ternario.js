const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
/*
    resultado: nome da função.
    nota: parâmetro
    =>: função arrow, não pode declarar return

    nota >= 7 Expressão relacional que retorna true ou false.
    Após o sinal de interrogação será o retorno caso a expressão seja true
    Após o sinal de dois pontos será o retorno caso a expressão seja false.
*/

console.log(resultado(8.5));
console.log(resultado(5.2));