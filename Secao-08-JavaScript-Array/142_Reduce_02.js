const alunos = [
    {nome: 'Guilherme', nota: 7.5, bolsista: true},
    {nome: 'Jamile', nota: 9.5, bolsista: true},
    {nome: 'Julia', nota: 10, bolsista: true},
    {nome: 'Bryan', nota: 8.1, bolsista: false},
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(arg1 => arg1.bolsista).reduce(todosBolistas));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(arg1 => arg1.bolsista).reduce(algumBolsista));
