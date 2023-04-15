// Objeto criado aponta para um endereço de memória -> 011001 -> {nome: 'João'}
const pessoa = {nome: 'João'};
// Mudar o atributo interno desse objeto não tem problema!
pessoa.nome = 'Guilherme';

// Agora, tentar apontar para um endereço de memória diferente sim ocorrera um erro, pois, foi atribuido como constante.
// pessoa = {nome: 'Tais'}; // Assignment to constant variable.

// Impede a modificação de atrbiutos e valores de propriedades existentes e impede a adição de novas propriedades.
Object.freeze(pessoa);

pessoa.nome = 'Jamile'; // Sera ignorado, e o valor do atributo continuara o mesmo da linha 4.
pessoa.end = 'Rua ABC'; // Ignorado.
delete pessoa.nome; // ignorado.
console.log(pessoa);
