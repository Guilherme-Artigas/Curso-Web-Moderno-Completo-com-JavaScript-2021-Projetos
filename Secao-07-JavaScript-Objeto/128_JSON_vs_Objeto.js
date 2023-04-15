const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma () {
        return this.a + this.b + this.c;
    },
};
// Convertendo um objeto para JSON.
console.log('Convertendo Objeto para JSON: ' + JSON.stringify(obj)); // Não converte funções.
console.log();

// Por régra os atributos devem estar entre as duplas para serem convertidos para JSON.
console.log(`Convertendo JSON para Objeto Exemplo 1: `)
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}'));

console.log(`Convertendo JSON para Objeto Exemplo 2: `)
console.log(JSON.parse('{"a": 1.7, "b": "Texto", "c": true, "d": {}, "e": []}'));
