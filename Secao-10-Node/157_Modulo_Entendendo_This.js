/**
 * this === global -> false
 * this === module -> false
 * 
 * this === module.exports -> true
 * this === exports -> fora de uma função isso é true, dentro de uma função isso é false
 * 
 * 
 * Conclusão é que o this dentro de uma função aponta para global
 * this fora de uma função aponta para o module.exports
 */

this.insideM = 'Restrito a estar dentro do módulo';

function logThis() {
  console.log('Dentro de uma função...');
  this.insideG = 'Atribuição a algo que está visivel globalmente';
};

thisGlobal();