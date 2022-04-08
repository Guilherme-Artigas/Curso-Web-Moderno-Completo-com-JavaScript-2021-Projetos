function rand([min = 0, max = 1000] = []) {
    if (min > max) {
        [min, max] = [max, min];
    };
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};
/* Explicando cada linha acima...
 * 1. Declaramos a função chamada rand, recebendo um operador destructuring como parâmetro, sabemos que ele é um destructuring de um array, pois, esta declarado com colchetes. Dentro do operador temos dois valores passados como padrão 'min e max' e caso não seja passado um array vazio na chamada, será assumido vazio com a declaração = [].
 * 2. Condicional se, dizendo que se min for maior que max, irá acontecer algo...
 * 3. Depois do sinal de atribuição estamos criando um array, e dizendo para atribuir os valores antes do sinal de atribuição de uma forma que min receba o valor de max e max receba o valor de min.
 * 4. Fechamos a estrutura condicional.
 * 5. Criamos a constante valor e fizemos uma operação para ela receber um valor inteiro randômico entre 0 e 1000.
 * 6. Dizemos para a função então retornar o valor de uma forma que seja possível atribui-la em uma variável no programa principal, usando .floor que significa arredondamento para baixo.
 * 7. Fechamos o corpo da função.
 */

console.log(rand([100, 1])); // Passando dois valores como parâmetros, porém, o primeiro é maior que o segundo.
console.log(rand([800])); // Passando somente o primeiro valor como parâmetro.
console.log(rand([, 20])); // Passando somente o segundo valor como parâmetro.
console.log(rand([])); // Passando array vazio como parâmetro.
console.log(); // Não passando nada como parâmetro, aqui devemos tomar cuidado, pois na definição da função precisamos declarar que caso não seja passado, ao menos uma estrutura vazia o valor padrõ será uma estrutura vazia, caso isso não ocorra ira dar erro na execução do código.
