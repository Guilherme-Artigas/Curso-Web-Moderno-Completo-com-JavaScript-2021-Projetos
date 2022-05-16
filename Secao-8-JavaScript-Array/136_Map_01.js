const nums = [1, 2, 3, 4, 5];

// Map é um for com propósito
let resultado = nums.map(function (e) {
    return e * 2;
});
console.log(resultado);

const soma10 = arg1 => arg1 + 10; // Função que soma 10 unidades ao elemento.
const triplo = arg1 => arg1 * 3; // Função que Transforma o elemento em 3x o seu valor.
const realBr = arg1 => `R$ ${parseFloat(arg1).toFixed(2).replace('.', ',')}`; // Função para personalizar valor em Real Brasileiro.

resultado = nums.map(soma10).map(triplo).map(realBr);
console.log(resultado);