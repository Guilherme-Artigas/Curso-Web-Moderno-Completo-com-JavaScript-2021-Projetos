Number.prototype.intervalo = function (parametro1, parametro2) {
    return this >= parametro1 && this <= parametro2;
};

const nota_Aluno = function (parametro = -1) {
    if (parametro.intervalo(9, 10)) {
        console.log(`Nota: ${parametro} ... Aluno(a) Elite!`);
    } else if (parametro.intervalo(7, 8.99)) {
        console.log(`Nota: ${parametro} ... Aluno Aprovado!`);
    } else if (parametro.intervalo(4, 6.99)) {
        console.log(`Nota: ${parametro} ... Recuperação!`);
    } else if (parametro.intervalo(0, 3.99)) {
        console.log(`Nota: ${parametro} ... Reprovado!`);
    } else {
        console.log(`Nota inválida!`);
    };
};

nota_Aluno(7.854);