const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    } // ES2015 em diante permite criar função dirteto dentro do objeto sem dar nome ao atributo.
};

pessoa.falar(); // Bom dia!

const ola = pessoa.falar;
ola(); // Conflito entre paradigmas: Funcional e OO.

const ola_2 = pessoa.falar.bind(pessoa);
ola_2();

// Bind é uma forma de delimitar o escopo no qual o this é executado.