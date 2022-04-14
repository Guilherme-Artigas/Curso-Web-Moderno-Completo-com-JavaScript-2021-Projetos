const conjunto_Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let indice in conjunto_Numeros) {
    if (indice == 1) {
        break;
    };
    console.log(`Indice: ${indice}, Valor: ${conjunto_Numeros[indice]}`);
};

for (let indice in conjunto_Numeros) {
    if (indice == 3) {
        continue;
    };
    console.log(`Indice: ${indice}, Valor: ${conjunto_Numeros[indice]}`);
};

rotulo: for (indice_Externo in  conjunto_Numeros) {
    for (indice_Interno in conjunto_Numeros) {
        if (indice_Externo == 2 && indice_Interno == 3) {
            console.log(`${indice_Externo}, ${indice_Interno}`);
            break rotulo;
        };
    };
};

console.log(`Fim!`);
// Não use rótulos!
