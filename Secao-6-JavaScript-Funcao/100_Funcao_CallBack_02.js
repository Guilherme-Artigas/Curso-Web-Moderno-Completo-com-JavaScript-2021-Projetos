/* Gerar novo array com todas as notas menores do que 7... meu exemplo:

const lista_Notas = [4.1, 7.4, 8.5, 4.5, 8.7, 6.3, 7.1, 9.6, 7.0, 6.6, 6.4, 3.2, 5.5];
const lista_Notas_Menores_7 = [];

let quantidade_Notas = lista_Notas.length; // 13 Notas

let indice = 0;
while (indice < 13) {
    if (lista_Notas[indice] < 7.0) {
        lista_Notas_Menores_7.push(lista_Notas[indice]);
    };
    console.log(`${indice + 1}º Nota: ${lista_Notas[indice]}`);
    indice = indice + 1;
    indice += 1;
    indice++;
};

console.log(lista_Notas_Menores_7);*/

// Exemplo dado na aula, sem callback: 
const notas = [6.1, 6.6, 7.0, 6.5, 8.1, 6.3, 6.9, 7.2, 8.3, 8.7, 6.4, 6.0, 7.5, 5.9, 10.0, 5.7]; // 16 notas
const notas_Baixas = [];

for (let indice in notas) {
    if (notas[indice] < 7.0) {
        notas_Baixas.push(notas[indice]);
    };
};
// notas_baixas = [6.1, 6.6, 6.5, 6.3, 6.9, 6.4, 6, 5.9, 5.7]; 9 notas

const notas_Baixas_2 = notas.filter(function (p1) {
    return p1 < 7.0;
});
// .filter { Retorna os elementos de uma matriz que atendem à condição especificada em uma função de retorno de chamada. }
// notas_baixas_2 = [6.1, 6.6, 6.5, 6.3, 6.9, 6.4, 6, 5.9, 5.7]; 9 notas

const notas_Baixas_3 = notas.filter(p1 => p1 < 7.0);
// notas_baixas_3 = [6.1, 6.6, 6.5, 6.3, 6.9, 6.4, 6, 5.9, 5.7]; 9 notas
