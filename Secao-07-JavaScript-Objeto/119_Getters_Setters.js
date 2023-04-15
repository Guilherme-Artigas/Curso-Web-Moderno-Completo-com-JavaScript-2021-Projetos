const sequencia = {
    _valor1: 1, // Convenção dizendo que esse atributo é para ser lido somente internamente.
    get aumenta () {return this._valor1++},
    set aumenta (aumenta) {
        if (aumenta > this._valor1) {
            this.valor1 = aumenta;
        };
    }
};

console.log(sequencia.aumenta, sequencia.aumenta);
sequencia.aumenta = 10;
console.log(sequencia.aumenta, sequencia.aumenta);
sequencia.aumenta = 9;
// console.log(sequencia.aumenta, sequencia,aumenta); // ReferenceError: aumenta is not defined
