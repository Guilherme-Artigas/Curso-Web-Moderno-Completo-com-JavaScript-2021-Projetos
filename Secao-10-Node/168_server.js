const express = require('express');

const app = express();

const PORT = 3001;

app.get('/exemplo', (req, res, next) => res.send({ nome: 'Guilherme Artigas', idade: 32, peso: 100 }));

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
