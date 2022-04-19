// Minha solução do desafio proposto pelo professor Leonardo na aula 106.
/* Construir uma função factory,
 * que recebesse parâmetros, com nome, valor e desconto para um produto.
 */

function criar_Produto (nome_produto, preco_produto, desconto_produto) {
    return {
        nome_produto,
        preco_produto,
        desconto_produto
    };
};

console.log(criar_Produto('Teclado e Mouse', 160.75, 160.75 * 0.49));
