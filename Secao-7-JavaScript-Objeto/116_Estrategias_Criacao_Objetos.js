// Usando a notação literal
const obj1 = {};

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;

// Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome; // Esta setado como público.
    this.getPreco_Desconto = () => {
        return (preco * (1 - desc)).toFixed(2);
    };
};

/* 1º Instância de Produto */ const p1 = new Produto('Caneta', 7.99, 0.15);
/* 2º Instância de Produto */ const p2 = new Produto('Notebook', 2989.99, 0.25);
console.log(p1.getPreco_Desconto(), p2.getPreco_Desconto());

// Função Factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return (salarioBase / 30) * (30 - faltas);
        }
    };
};

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma Função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
