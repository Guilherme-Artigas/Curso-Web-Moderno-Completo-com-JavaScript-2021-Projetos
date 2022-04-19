// Function Factory é uma função que retorna um objeto.

// Factory simples
function criar_Pessoa () {
    return {
        nome: 'Ana',
        sobrenome: 'Tereréu'
    };
};

console.log(criar_Pessoa());

function criar_Pessoa_2 (nome, sobrenome) {
    return {
        nome,
        sobrenome
    };
};

console.log(criar_Pessoa_2('Guilherme', 'Artigas'));

function criar_Produto (nome_produto, preco_produto, desconto_produto) {
    return {
        nome_produto,
        preco_produto,
        desconto_produto
    };
};

console.log(criar_Produto('Teclado e Mouse', 160.75, 160.75 * 0.49));
