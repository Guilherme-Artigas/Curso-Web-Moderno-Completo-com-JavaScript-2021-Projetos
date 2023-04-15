Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0];
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    };
    return acumulador;
};

const soma = (total, valor) => total + valor;
const lista_numeros = [2, 5, 7, 9, 12, 16, 21, 54];
console.log(lista_numeros.reduce2(soma));
