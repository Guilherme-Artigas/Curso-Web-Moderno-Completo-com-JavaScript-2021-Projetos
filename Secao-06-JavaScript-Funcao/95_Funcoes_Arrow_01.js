let dobro = function (p1) {
    return 2 * p1;
};

dobro = (p1) => {
    return 2 * p1;
};

dobro = p1 => 2 * p1;
// Na linha acima quando temos uma função de uma unica linha, podemos omitir as chaves e colocar toda a declaração na mesma linha e o retorno da função sera implícito.
console.log(dobro(Math.PI));

ola_1 = () => 'Olá 1 !'; // Forma padrão.
ola_2 = _ => 'Olá 2 !'; // Possui parâmetro.

console.log(ola_1());
console.log(ola_2());
