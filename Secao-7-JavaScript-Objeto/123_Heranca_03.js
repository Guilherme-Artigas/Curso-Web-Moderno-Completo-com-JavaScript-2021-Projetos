const pai = {
    nome: 'Guilherme',
    corCabelo: 'Castanho',
};
console.log(`Pai: ${pai.nome} e tem a cor do cabelo: ${pai.corCabelo}`);
console.log(`--------------------------------------------------------`);

const filho1 = Object.create(pai);
filho1.nome = 'Bryan';
console.log(`Filho 1: ${filho1.nome} e tem a cor do cabelo: ${filho1.corCabelo}`);
console.log(`--------------------------------------------------------`);

const filho2 = Object.create(pai, {
    nome: {value: 'Julia', writable: false, enumerable: true},
});
console.log(`Filha 2: ${filho2.nome} e tem a cor de cabelo: ${filho2.corCabelo}`);
console.log(`--------------------------------------------------------`);

filho2.nome = 'Carla';
console.log(`Tentando alterar o atributo nome da constate filho2...`);
console.log(`Filha 2: ${filho2.nome} e tem a cor de cabelo: ${filho2.corCabelo}`);
console.log(`--------------------------------------------------------`);

console.log(Object.keys(filho1));
console.log(Object.keys(filho2));

for (let indice in filho2) {
    // Forma de verificar se a propriedade pertence ao objeto ou ele esta recendo algum de herança.
    filho2.hasOwnProperty(indice) ? console.log(indice) : console.log(`Por herança ${indice}`);
};
