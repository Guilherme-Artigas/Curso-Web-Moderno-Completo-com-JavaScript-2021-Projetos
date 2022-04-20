function pegar_Preco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
};

const produto = {
    nome: 'Notebook',
    preco: 4.589,
    desc: 0.15,
    pegar_Preco
};

global.preco = 20;
global.desc = 0.1;

console.log(pegar_Preco());
console.log(produto.pegar_Preco());

const carro = {
    preco: 10.000,
    desc: 0.1
};

console.log(pegar_Preco.call(carro));
console.log(pegar_Preco.apply(carro));

console.log(pegar_Preco.call(carro, 0.17, 'U$'));
console.log(pegar_Preco.apply(global, [0.17, 'U$']));
