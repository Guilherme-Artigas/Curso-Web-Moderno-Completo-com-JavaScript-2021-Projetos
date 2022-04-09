function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // (|| ou) A operação procura um resultado true.
    const comprarTv50 = trabalho1 && trabalho2; // (&& e) Todos os operandos precisam ser verdadeiros.
    // const comprarTv32 = !!(trabalho1 ^ trabalho2);
    const comprarTv32 = trabalho1 != trabalho2; // (!=) Operador de diferente de, fazedno papel de xor / ou exclusivo.
    const manterSaudavel = !comprarSorvete; // (!) Negação lógica.
    // Todos as operações acima são operações binarias com excessão da linha 6, negação lógica é unário.
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
    // A linha acima é o mesmo que...
    /*
        return {
            comprarSorvete: comprarSorvete, 
            comprarTv50: comprarTv50, 
            comprarTv32: comprarTv32, 
            manterSaudavel: manterSaudavel
        };
        ou seja, a declaração da linha 9 é uma forma reduzida da escrita de código que simplifica a sintaxe, é novidade do ES2015.
    */
};

console.log('Exemplo 1:');
console.log(compras(true, true));
console.log();
console.log('Exemplo 2:');
console.log(compras(true, false));
console.log();
console.log('Exemplo 3:');
console.log(compras(false, true));
console.log();
console.log('Exemplo 4:');
console.log(compras(false, false));
console.log();