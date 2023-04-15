let numero_exemplo1 = 1;
let numero_exemplo2 = 2;

numero_exemplo1++; // Pós
--numero_exemplo2; // Pré (tem precedencia dentro de uma operação).

console.log(numero_exemplo1);
console.log(numero_exemplo2);

console.log(++numero_exemplo1 === numero_exemplo2--); // true
// A linha acima a operação ++numero_exemplo1 tem precedencia sobre as outras, depois vem a comparação e por ultimo foi realizado a operação numero_exemplo2--

/*
 * Dica da aula, o professor Leonardo disse sobre escrever o código da forma mais simples possível, escolher bons nomes para as variáveis, diz ele que pode parecer facíl, porém não é, o exemplo dado na linha 10 é um ótimo exemplo de código complexo e deve ser evitado.
 * 
 * 
 * 
*/