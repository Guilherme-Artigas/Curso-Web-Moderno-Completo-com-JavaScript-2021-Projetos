const express = require('express');
const { pegarTodosOsProdutos, pegarProdutoPorId, salvarProduto, excluirProduto } = require('./169_BancoDeDados');

const app = express();

const PORT = 3001;

app.use(express.json());

app.get(
  '/produtos',
  (_req, res) => res.send(pegarTodosOsProdutos()),
);

app.get(
  '/produtos/:id',
  (req, res) => res.send(pegarProdutoPorId(req.params.id)),
);

app.post(
  '/produtos',
  (req, res) => res.send(salvarProduto({ ...req.body })),
);

app.put(
  '/produtos/:id',
  (req, res) => {
    const produto = salvarProduto({ id: req.params.id, ...req.body });
    res.send(produto);
  },
);

app.delete(
  '/produtos/:id',
  (req, res) => {
    const produto = excluirProduto(req.params.id);
    res.send(produto);
  },
);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
