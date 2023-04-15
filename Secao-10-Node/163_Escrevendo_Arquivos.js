const fs = require('fs');

const listaUsuarios = [
  {
    nome: 'Guilherme',
    sobrenome: 'Artigas',
    peso: 99,
    data_nascimento: '06/02/1922',
    altura: 1.85,
    endereco: {
      logradouro: 'Rua Pedro Pinheiro',
      numero: 47,
    },
    contato: {
      telefone: '41 98430-3068',
      email: 'guilherme.artigas92@gmail.com',
    },
    nomePai: 'João Maria Artigas',
    nomeMae: 'Jamile Abrão Artigas',
  },
  {
    nome: 'Julia',
    sobrenome: 'Artigas',
    peso: 15,
    data_nascimento: '21/12/2020',
    altura: 1.00,
    endereco: {
      logradouro: 'Rua Pedro Pinheiro',
      numero: 47,
    },
    contato: {
      telefone: '',
      email: '',
    },
    nomePai: 'Guilherme Artigas',
    nomeMae: 'Rafaela Miranda Stresser',
  }
];

fs.writeFile(
  __dirname + '/163_usuarios.json',
  JSON.stringify(listaUsuarios, null, 2),
  err => console.log(err || 'Arquivo salvo com sucesso!')
);
