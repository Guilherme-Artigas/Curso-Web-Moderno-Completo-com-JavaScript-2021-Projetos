/*
    08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém registro de todos as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
*/

// Fórmula para fazer números randomicos inteiros em JS: Math.floor(Math.random() * -- + 1)

// Pedro Joga X vezes, ou seja, quantidade aleatória de vezes.
// Armazena todas as pontuações feitas por jogo.
// Armazena Melhor e Pior pontuação.
// Função deve retornar um vetor, quantas vezes bateu recorde de pontos, e qual partida marcou menos pontos.

function estatisticas_Pedro () {
    const x = Math.floor(Math.random() * 73);
    const pontuacao_Todos_Jogos = [];
    let melhor_Pontuacao = null;
    let menor_Pontuacao = null;
    let x_Recorde = null;
    let pior_Partida = null;
    const e = [];
    for (let i = 0; i < x; i++) {
        pontuacao_Todos_Jogos.push(Math.floor(Math.random() * 33));
        if (i == 0) {
            melhor_Pontuacao = pontuacao_Todos_Jogos[0];
            menor_Pontuacao = pontuacao_Todos_Jogos[0];
        } else if (pontuacao_Todos_Jogos[i] > melhor_Pontuacao) {
            melhor_Pontuacao = pontuacao_Todos_Jogos[i];
            x_Recorde += 1;
        } else if (pontuacao_Todos_Jogos[i] < menor_Pontuacao) {
            menor_Pontuacao = pontuacao_Todos_Jogos[i];
            pior_Partida = i + 1;
        };
    };
    e[0] = x_Recorde;
    e[1] = pior_Partida;
    return e;
};
console.log(`Quantidade de recordes batidos, pior partida respctivamente: ${estatisticas_Pedro()}`);
