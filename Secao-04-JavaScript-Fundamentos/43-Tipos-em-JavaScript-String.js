const escola = 'Cod3r';

console.log(escola.charAt(4));
// Retorna o caractere especificado dentro dos parênteses, valor passado como parâmetro.

console.log(escola.charAt(5));
// Foi dado esse exemplo para ilustrar a aula dizendo que JavaScript não retorna nenhum erro.

console.log(escola.charCodeAt(3));
// Retorna o valor Unicode do caractere, o número entre parênteses é o parâmetro do índice que será verificado e retornara o valor.

console.log(escola.indexOf('3'));
// Pesquisa o valor passado como parâmetro dentro da String e retorna o índice em que será encontrada, caso não encontre o retorno será -1.

console.log(escola.substring(1));
// Escreve a frase contida na String, a partir do parâmetro passado até o final dela.

console.log(escola.substring(0, 3));
// Nesse caso ira retornar Cod.

console.log('Escola '.concat(escola).concat('!'));
// Diferente de Number podemos chamar a função direta, nesse caso teremos valores concatenados formando uma frase ‘Escola Cod3r!’.

console.log(escola.replace(3, 'e'));
// (Substituindo determinado caractere passando como parâmetro o índice em que o valor se encontra e qual caractere queremos colocar no lugar.)

console.log('Ana,Maria,Pedro'.split(','));
// (Transforma a frase em um array, passando o valor de parâmetro como separador.)

