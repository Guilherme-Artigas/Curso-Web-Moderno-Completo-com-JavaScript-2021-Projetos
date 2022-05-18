const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
];

console.log(`Meu exemplo...`)
console.log(produtos.filter(function (arg1) {
    return arg1.preco > 500 && arg1.fragil === true;
}));
console.log(``);

console.log(`Exemplo do Professor...`)
const caro = arg1 => arg1.preco >= 500;
const fragil = arg1 => arg1.preco;

console.log(produtos.filter(caro).filter(fragil));