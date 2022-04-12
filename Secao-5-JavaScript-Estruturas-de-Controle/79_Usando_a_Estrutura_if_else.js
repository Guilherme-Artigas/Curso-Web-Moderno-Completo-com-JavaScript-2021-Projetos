const imprimir_Resultado = function(parametro) {
    if (parametro >= 7) {
        console.log(`Nota: ${parametro} ... APROVADO!`);
    } else {
        console.log(`Nota: ${parametro} ... REPROVADO!`);
    };
};

// imprimir_Resultado(9.3); Nota: 9.3 ... APROVADO!
// imprimir_Resultado(6.8); Nota: 6.8 ... REPROVADO!
// imprimir_Resultado('Eita!'); Nota: Eita! ... REPROVADO!