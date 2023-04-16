const sequence = { _id: 1, get id() { return this._id++; } };

const produtos = {};

function pegarTodosOsProdutos() { return Object.values(produtos); };

function pegarProdutoPorId(id) { return produtos[id] || {}; };

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
};

function excluirProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
};

module.exports = { pegarProdutoPorId, pegarTodosOsProdutos, salvarProduto, excluirProduto };
