Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { // Se retornar True...
            newArray.push(this[i]);
        };
    };
    return newArray;
};

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
];

const caro = arg1 => arg1.preco >= 500;
const fragil = arg1 => arg1.preco;

console.log(produtos.filter2(caro).filter2(fragil));