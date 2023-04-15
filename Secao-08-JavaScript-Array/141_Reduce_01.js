const alunos = [
    {nome: 'Guilherme', nota: 7.5, bolsista: false},
    {nome: 'Jamile', nota: 9.5, bolsista: true},
    {nome: 'Julia', nota: 10, bolsista: true},
    {nome: 'Bryan', nota: 8.1, bolsista: false},
];

console.log(alunos);
const resultado = alunos.map(arg1 => arg1.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
});
console.log(resultado);
