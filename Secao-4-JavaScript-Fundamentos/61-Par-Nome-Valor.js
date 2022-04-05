// par nome/valor
const saudacao = 'Ola'; // contexto léxico 1

function exec() {
    const saudacao = 'Tudo bem?'; // contexto léxico 2
    return saudacao;
};

// objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: ['Guilherme', 'Artigas'],
    idade: 30,
    peso: 95.9,
    endereco: {
        logradouro: 'Rua Pedro Pinheiro',
        numero: 47,
        bairro: 'Jardim Pinheiro',
        cidade: null,
        CEP: 83560000,
        nome: ['Junior','Artigas']
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);