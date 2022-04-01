{
    {
        {
            {
                var sera = 'Será????'; // Mesmo dentro de vários blocos, está em escopo global.
            };
        };
    };
};

console.log(sera);

function local() {
    var escopo_local = 123;
    console.log(escopo_local);
};

console.log(escopo_local); // Retorna erro, pois, foi declarada dentro de function.

/*
    Declarações de variáveis com a palavra reservada var tem o escopo global dentro de qualquer bloco de código, ou seja, é vista por todo o código podendo ser chamada a qualquer momento sem retornar erro, a exceção e se var estiver dentro de um bloco associado a uma função, nesse cenário o escopo de var não é mais global e sim local.

    Por que devemos fugir de declarações de variáveis com escopo global?

    Existe a vantagem de poder acessar a variável global de qualquer lugar do sistema, porém, qualquer sobrescrita dessa variável global pode causar uma pane geral no sistema.
*/