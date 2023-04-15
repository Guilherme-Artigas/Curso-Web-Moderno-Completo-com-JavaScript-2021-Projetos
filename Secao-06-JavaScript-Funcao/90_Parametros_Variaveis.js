function parametros_Variantes () {
    var aculmulo = null;
    for (let indice in arguments) {
        aculmulo += arguments[indice];
    }
    return aculmulo;
};

console.log(parametros_Variantes()); // null
console.log(parametros_Variantes(5, 10)); // 15
console.log(parametros_Variantes(5.1, 10.8, 8.63, 19.18, 20.41)); // 64.12
console.log(parametros_Variantes(1.5, 2.1, 3.5, 'Teste')); // 7.1Teste
console.log(parametros_Variantes('A', 'B', 'C')); // nullABC
