const produto1 = {};
produto1.nome = 'Iphone';
produto1.preco = 4998.90;
produto1['Desconto Legal'] = 0.40; // Evitar

console.log(produto1);

const produto2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(produto2);
console.log(produto2);