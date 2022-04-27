/*
    23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function mediaPonderada () {
    let codigoAluno = null;
    while (codigoAluno != -1) {
        codigoAluno = Math.floor(Math.random() * 10 - 1);
        let nota1 = Math.floor(Math.random() * (11 - 1) + 1);
        let nota2 = Math.floor(Math.random() * (11 - 1) + 1);
        let nota3 = Math.floor(Math.random() * (11 - 1) + 1);
        let mai = null;
        let int = null;
        let men = null;
        let med = null;
        
        // Descobre maior nota...
        if (nota1 >= nota2 && nota1 >= nota3) {
            mai = nota1;
        };

        if (nota2 >= nota1 && nota2 >= nota3) {
            mai = nota2;
        };

        if (nota3 >= nota1 && nota3 >= nota2) {
            mai = nota3;
        };

        // Descobre a menor nota...
        if (nota1 <= nota2 && nota1 <= nota3) {
            men = nota1;
        };

        if (nota2 <= nota1 && nota2 <= nota3) {
            men = nota2;
        };

        if (nota3 <= nota1 && nota3 <= nota2) {
            men = nota3;
        };

        // Descobre a nota intermediaria...
        if (nota1 > nota2 && nota1 < nota3) {
            int = nota1;
        };

        if (nota2 < nota1 && nota2 > nota3) {
            int = nota2;
        };

        if (nota3 < nota1 && nota3 > nota2) {
            int = nota3;
        };

        med = ((4 * mai) + (3 * int) + (3 * men)) / (4 + 3 + 3);
        console.log(`Código do Aluno: ${codigoAluno}, 1º Nota: ${nota1} / 2º Nota: ${nota2} / 3º Nota: ${nota3} / Média: ${med} / Situação: ${med >= 5 ? 'APROVADO' : 'REPROVADO'} `);
    };
};

mediaPonderada();
