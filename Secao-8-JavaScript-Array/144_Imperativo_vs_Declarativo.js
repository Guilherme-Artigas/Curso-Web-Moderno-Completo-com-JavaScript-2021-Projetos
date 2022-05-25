const alunos = [
    {nome: 'Guilherme', nota: 5.1},
    {nome: 'Ana', nota: 6.4},
    {nome: 'Julia', nota: 6.8},
    {nome: 'Jamile', nota: 6.7},
    {nome: 'Rafaela', nota: 4.2},
    {nome: 'Bryan', nota: 8.9},
    {nome: 'João', nota: 7.7},
    {nome: 'Junior', nota: 5.5},
    {nome: 'Isabele', nota: 6.8},
    {nome: 'Isadora', nota: 5.9},
    {nome: 'Silvia', nota: 7.2},
    {nome: 'Valentina', nota: 9.2},
    {nome: 'Eliane', nota: 8.5},
    {nome: 'Mara', nota: 7.3},
    {nome: 'Luiz', nota: 6.1},
    {nome: 'Bianca', nota: 8.7},
    {nome: 'Soeli', nota: 6.3},
    {nome: 'Santina', nota: 10},
    {nome: 'Jorge', nota: 9.5},
    {nome: 'Tiago', nota: 7.2},
];

// Imperativo: É uma forma de declaração mais explicita, porem, com nenhuma possibilidade de reuso de código, posteriormente.
let total_1 = 0;
for (let indice = 0; indice < alunos.length; indice++) {
    total_1 += alunos[indice].nota;
};
console.log(`Exibindo a média no formato Imperativo: ${total_1 / alunos.length}`); // output: Exibindo a média no formato Imperativo: 7.2


// Declarativo: É uma forma de declaração mais direta, sem nenhum detalhe de como as coisas estão acontecendo, porem, essa forma de declaração é muito mais interessante, pois, possibilita reuso de código.
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total_2 = alunos.map(getNota).reduce(soma);
console.log(`Exibindo a média no formato Declarativo: ${total_2 / alunos.length}`); // output: Exibindo a média no formato Declarativo: 7.2
