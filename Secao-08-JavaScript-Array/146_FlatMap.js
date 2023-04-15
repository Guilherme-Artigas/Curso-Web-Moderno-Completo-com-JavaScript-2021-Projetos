Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

const escola = [
    {nome: 'Tuma M1', alunos: [
        {nome: 'Gustavo', nota: 8.1},
        {nome: 'Ana', nota: 9.3},
    ]},
    {nome: 'Turma M2', alunos: [
        {nome: 'Rebeca', nota: 8.9},
        {nome: 'Roberto', nota: 7.3},
    ]},
];

const getNotasDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno);

const notas_1 = escola.map(getNotasDaTurma);
console.log(notas_1); // output: [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

console.log('Sem usar a Função flatMap...');
console.log([].concat([8.1, 9.3], [8.9, 7.3])); // output: [ 8.1, 9.3, 8.9, 7.3 ]

const notas_2 = escola.flatMap(getNotasDaTurma);
console.log(`Usando a função flatMap...`);
console.log(notas_2);
