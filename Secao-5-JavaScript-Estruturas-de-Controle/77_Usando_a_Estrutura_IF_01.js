function aluno_Aprovado_Reprovado(parametro) {
    if (parametro >= 7) {
        console.log(`Parabens! Aluno aprovado com a nota ${parametro}`);
    };
};

aluno_Aprovado_Reprovado(6.9);

function detector_De_Mentiras(parametro) {
    if (parametro) {
        console.log(`${parametro} é true dentro de JS :D`);
    };
};

detector_De_Mentiras();             // false, não irá mostrar nada na tela
detector_De_Mentiras(null);         // false, não irá mostrar nada na tela
detector_De_Mentiras(undefined);    // false, não irá mostrar nada na tela
detector_De_Mentiras(NaN);          // false, não irá mostrar nada na tela
detector_De_Mentiras('');           // false, não irá mostrar nada na tela
detector_De_Mentiras(0);            // false, não irá mostrar nada na tela

detector_De_Mentiras(-1);           // true, irá mostrar msg na tela!
detector_De_Mentiras(' ');          // true, irá mostrar msg na tela!
detector_De_Mentiras('?');          // true, irá mostrar msg na tela!
detector_De_Mentiras([]);           // true, irá mostrar msg na tela!
detector_De_Mentiras([1, 2]);       // true, irá mostrar msg na tela!
detector_De_Mentiras({});           // true, irá mostrar msg na tela!