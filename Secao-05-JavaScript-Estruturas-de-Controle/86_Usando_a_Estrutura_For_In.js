const notas_Alunos = [4.1, 8.5, 7.2, 6.3, 9.7, 8.3, 4.6, 7.5, 5.4, 9.8, 3.2, 6.1];

for (let indice in notas_Alunos) {
    console.log(`${indice}. ${notas_Alunos[indice]}`);
};
// Professor comentou que existem formas mais interessantes de se varrer um array.


const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Artigas',
    idade: 30,
    peso: 100
};
console.log();

for (let indice in pessoa) {
    console.log(`${indice}: ${pessoa[indice]}`);
};
// Professor comentou que para objetos o for in faz mais sentido.