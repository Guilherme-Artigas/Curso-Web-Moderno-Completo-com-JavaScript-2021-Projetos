function Pessoa (p1) {
    this.nome = p1;
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    };
};

const pessoa_1 = new Pessoa('Guilherme');
pessoa_1.falar();

// O professor mostrou 3 formas de se criar novos objetos.