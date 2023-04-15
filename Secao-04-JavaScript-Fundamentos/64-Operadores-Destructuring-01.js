// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const {nome, idade} = pessoa;
// Lendo a linha acima, estamos dizendo para retirar os atributos nome e idade do objeto pessoa e transformar-las em variáveis dentro do nosso script, ou seja, apartir desse momento podemos usar o que era um atributo como uma variável.
console.log(nome, idade); // Ana 5

const {nome: n, idade: i} = pessoa;
// Na linha acima estamos extraindo os dados como na linha 13, porém, renomeando as variáveis com nomes diferentes.
console.log(n, i); // Ana 5

const {sexo} = pessoa;
// Na linha acima estamos tentando tirar algo que não existe dentro do objeto pessoa, o retorno do JavaScript será o padrão 'undefined'.
console.log(sexo); // undefined

const {complemento = null} = pessoa;
// Na linha acima estamos atribuindo valor padrão a algo que não existe.
console.log(complemento); // null

const {endereco: {logradouro = null, numero = null, cep = null}} = pessoa;
// Na linha acima esta exemplificando como fazer o destructuring de um objeto dentro de outro.
console.log(logradouro, numero, cep); // Rua ABC 1000 null

const {conta: {agencia, cc}} = pessoa;
// Na linha acima estamos exemplificando algo que deve-se tomar cuidado, pois, estamos tentando desestruturar um dado aninhado que não existe.