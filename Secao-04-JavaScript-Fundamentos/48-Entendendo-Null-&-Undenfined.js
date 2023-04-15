let valor;
// Não inicializado, sem atribuição de valor, porém mencionado em algum momento do código.
console.log(valor);


// console.log(valor2);
// Ira gerar erro, pois, esse valor nunca nem foi mencionado no código.

valor = null;
// Foi definida, porém, sem atribuição de qualquer valor.

/*
    Quando estamos programando e temos uma situação em que está acontecendo passagem de valor por referência e nós queremos zerar esse valor, devemos atribuir o valor null a determinada variável, nunca devemos definir como undefined, devemos deixar essa atribuição a própria linguagem.
*/

// console.log(valor.toString());, TypeError: Cannot read properties of null (reading 'toString')

const produto = {};
console.log(produto.preco); // preco não esta definido dentro de produto. Retorna: undefined
console.log(produto); // Retorna objeto vazio. Retorna: {}

produto.preco = 3.50;
console.log(produto); // Retorna tudo dentro do objeto produto.

produto.preco = undefined; // Devemos evitar isso.
console.log(!!produto.preco);
// Caso queiramos excluir um valor devemos usar um delete produto.preco
console.log(produto);

produto.preco = null; // Forma correta de se zerar o valor de atribuição por referência.
console.log(!!produto.preco); // Também vai retornar false.
console.log(produto);