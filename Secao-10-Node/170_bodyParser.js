/*
Erro do bodyParser deprecated
Fala galera! Tudo bom?

Temos recebido várias dúvidas sobre a questão do bodyParser is deprecated, e viemos abordar alguns detalhes sobre essa extensão.

A primeira delas é que, quando se usa as mesmas dependências do projeto que está sendo desenvolvido, realmente essa mensagem aparece. Mas mesmo com isso o projeto funciona corretamente, de modo que vocês não precisam se assustar caso vejam a mensagem ou, ainda, vejam a extensão riscada no meio.

Caso decidam por corrigir esse comportamento, é só usar algo como:

// Express v4.16.0 e superior
// --------------------------
const express = require('express');
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
 
// For Express 4.16.0 ou abaixo
// ------------------------------------
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
Lembrando que é muito importante você procurar manter seus projetos o mais fiéis aos do curso possível, para que não ocorram discrepâncias de comportamento significativas, como mudanças de uma versão para outra.

No mais, segundo o próprio site do Express JS, sobre o bodyParser no Express 4:

As funções de middleware integradas do Express(...), express.bodyParser e (...) não estão mais disponíveis no objeto express. É preciso instalar manualmente as alternativas e carregá-las no aplicativo.

A importação do bodyParser continua a mesma:

const bodyParser = require('body-parser');
E na hora de usar, seria algo como:

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
Com isso, os comportamentos estranhos sumirão e assim vocês podem continuar o desenvolvimento dos trabalhos de vocês.

Atentamos ainda que essa extensão é usada novamente em projetos de seções futuras, mas resolvemos trazer na mais cedo possível para resolver logo o problema e responder as dúvidas quanto a esse comportamento.

Bons estudos!
*/