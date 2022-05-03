// Existem três maneiras de definir classes em JavaScript

// 1º Opção: Classe através de função
function pessoa(_nome) {
    this.nome = _nome;
};

// 2º Opção: Criando um novo objeto
processador = new Cpu('ryzen 5 3500x');

// 3º Opção Classe através de literais
var carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    getDetalhes: function () {
        return this.marca + ' - ' + this.modelo;
    }
};

// Abaixo estão as praticas da aula
// Código não executável!

// Procedural

function processamento (p1, p2, p3) {
    // ...
};

// OO

objeto = {
    parametro1,
    parametro2,
    parametro3,
    processamento () {
        // ...
    }
};

objeto.processamento();

// Principios importantes:
// 1. abstração: Pegar um objeto do mundo real, entender como traduzir esse objeto para dentro do sistema.
// 2. encapsulamento: Trata-se do nível de comunicação entre os objetos, quanto maior é a dependencia pior é para o sistema como um todo.
// 3. herança: Reuso de código, recebe atributos e comportamentos de um objeto pai.
// 4. polimorfismo: multiplas formas.