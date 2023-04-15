// Object.preventExtensions: Não permite a adição de novos atributos em determinado objeto, somente exclusão.
const produto = Object.preventExtensions({
    nome: 'Teclado',
    fabricante: 'Logitech',
    preco: 80.50,
    tag: 'Promoção',
});
console.log('Objeto Produto aberto a adições? R:', Object.isExtensible(produto) ? 'Sim' : 'Não');
produto.nome = 'Borracha'; // Vai deixar modificar o nome!
produto.descricao = 'Borracha Escolar Branca'; // Essa linha não vai surtir efeito algum no objeto ja criado.
delete produto.tag; // Irá excluir um dos atributos.
console.log(produto);
console.log(`---------------------------------------------------------------`);

// Object.seal: Nõ permite a adição nem exclusão de atributos, porém permite modifica-los
const pessoa = {
    nome: 'Guilherme',
    idade: 30,
    peso: 100.5,
    sexo: 'Masculino',
};
Object.seal(pessoa);
pessoa.end = 'Rua Pedro Pinheiro'; // Essa linha não ira surgir efeito.
delete pessoa.peso; // Essa linha não ira surgir efeito.
pessoa.peso = 100.25; // Como objeto esta setado como seal, somente modificações como essa poderão ocorrer.
console.log(pessoa); // outpu: { nome: 'Guilherme', idade: 30, peso: 100.25, sexo: 'Masculino' }
console.log('Objeto pessoa esta selado? R:', Object.isSealed(pessoa) ? 'Sim' : 'Não');