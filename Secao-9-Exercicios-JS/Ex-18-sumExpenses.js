const sumExpenses = (expenses) => expenses.reduce((acc, cur) => acc += cur.preco, 0);

const entertainmentExpenses = [
  { nome: 'Jornal online', categoria: 'Informação', preco: 89.99 },
  { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
];

const electronicExpenses = [
  { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
  { nome: 'Mackbook Pro', categoria: 'Eletrônicos', preco: 30999.90 }
];

console.log(sumExpenses(entertainmentExpenses));
console.log(sumExpenses(electronicExpenses));
