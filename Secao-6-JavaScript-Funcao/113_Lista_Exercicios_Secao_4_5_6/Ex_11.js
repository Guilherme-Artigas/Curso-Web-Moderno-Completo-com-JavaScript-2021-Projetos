/*
    11) As regras para o cálculo dos anos bissextos são as seguintes:
    De 4 em 4 anos é ano bissexto;
    De 100 em 100 anos não é ano bissexto;
    De 400 em 400 anos é ano bissexto;
    Prevalecem as últimas regras sobre as primeiras.
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
    mensagem e retornando true ou false.
*/

function ano_bissexto () {
    const ano_Aleatorio = Math.floor(Math.random() * (2022 - 1000) + 1000); // Valor inteiro aleatório entre dois valores.
    if (ano_Aleatorio % 4 == 0 && ano_Aleatorio % 100 != 0) {
        return console.log(`Ano: ${ano_Aleatorio} ... É Bissexto!`);
    };
    if (ano_Aleatorio % 4 != 0 && ano_Aleatorio % 400 != 0) {
        return console.log(`Ano: ${ano_Aleatorio} ... Não é Bissexto!`);
    };
    if (ano_Aleatorio % 4 != 0) {
        if (ano_Aleatorio % 400 == 0) {
            return console.log(`Ano: ${ano_Aleatorio} ... É Bissexto!`);
        };
    };
};
ano_bissexto();
