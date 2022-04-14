// Função em JS é First-Class Object (Citizens)
// Higher-Order function

// Criar funções de forma literal
function funcao_1 () { // Pode ou não ter parâmetros.
    
    // Pode ou não retornar valores.
};

// Armazenar funções em uma variável
const funcao_2 = function () { // Pode ou não ter parâmetros.

    // Pode ou não retornar valores.
};

// Armazenar funções em array's
const lista = [function (p1, p2) {return p1 + p2;}, funcao_1, funcao_2];
console.log(lista[0](12, 13));

// Armazenar funções em objetos
const objeto_1 = {
    primeiro: function () {return `Oi`},
}
console.log(objeto_1.primeiro());

// Passando funções como parâmetro
function executar (funcao_parametro) {
    funcao_parametro();
};
executar (function () {console.log(`Testando essa doidera!`)});

// Função pode retornar outra função!
function soma (p1, p2) {
    return function (p3) {
        console.log(p1 + p2 + p3);
    };
};

soma(9, 6)(5); // 20
const exemplo = soma(20, 25);
exemplo(50); // 95
