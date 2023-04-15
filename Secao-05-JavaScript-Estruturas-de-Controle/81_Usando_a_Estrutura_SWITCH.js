// Estrutura adequada para múltiplas seleções... switch () {}

const mostrar_Nota = function (parametro) {
    switch (Math.floor(parametro)) {
        case 9: case 10:
            console.log(`Nota: ${parametro} ... Aluno(a) Elite!`); break;
        case 7: case 8:
            console.log(`Nota: ${parametro} ... Aluno(a) Aprovado!`); break;
        case 4: case 5: case 6:
            console.log(`Nota: ${parametro} ... Aluno(a) Recuperação!`); break;
        case 0: case 1: case 2: case 3:
            console.log(`Nota: ${parametro} ... Aluno(a) Reprovado!`); break;
        default:
            console.log(`Houve algum erro na soma da nota do aluno!`);
    };
};

mostrar_Nota(5.7);