const peso1 = 1.0;
const peso2 = Number('2.0'); // A string é convertida em número.

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(1)); // Controle de casas decimais com arredondamento para cima.
console.log(media.toString()); // Conversão de tipo, media e numérico, com essa sentença fazemos a conversão para string. Se passarmos o número 2 como argumento dentro de .toString(2) descobriremos o valor de determinado número em sequencia bínaria.

let media_texto = media.toString();
console.log(typeof media_texto);