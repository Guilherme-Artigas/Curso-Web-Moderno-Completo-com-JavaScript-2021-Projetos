let indice1 = 0;

console.log(`Contagem com while...`)
while (indice1 <= 10) {
    console.log(indice1);
    indice1++;
    // indice1 = indice1 + 1;
    // indice1 += 1;
};
console.log(`------------------------`);
console.log(`Contagem com for... `);
for (let indice2 = 0; indice2 <= 10; indice2++) {
    console.log(indice2);
};
console.log(`------------------------`);
const notas = [6.4, 3.8, 9.9, 2.1];
for (let indice3 = 0; indice3 < notas.length; indice3++) {
    console.log(`${indice3 + 1}º nota: Valor ${notas[indice3]}`);
};
