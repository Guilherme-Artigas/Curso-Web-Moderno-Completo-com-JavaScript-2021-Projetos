/*
    10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
*/

function divisivel_Tres (p1) {
    if (p1 % 3 == 0) {
        return console.log(true);
    } else {
        return console.log(false);
    };
};

divisivel_Tres(Math.floor(Math.random() * 6)); // Número entre 0 e 5.
