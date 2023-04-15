/*
    39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

function trade (p1, p2) {
    for (let i in p1) {
        p2.push(p1[i]);
    };

    for (let i in p2) {
        p1.push(p2[i]);
    };
    p1.splice(0, 10);
    p1.splice(10, 19);
    p2.splice(0,10);
    return console.log(p1, p2);
};

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

trade(a, b);
