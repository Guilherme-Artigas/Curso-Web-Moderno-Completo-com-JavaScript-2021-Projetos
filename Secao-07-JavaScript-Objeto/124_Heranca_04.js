function meuObjeto () {
    // ...
};
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto;
const obj2 = new meuObjeto;

// Uma vez que eu crio dois objetos diferentes a partir de uma mesma função construtora os protótipos desses objetos apontam para o mesmo objeto por padrão?
console.log(obj1.__proto__ === obj2.__proto__); // output: true

// Quando criamos uma função a partir de uma função construtora o __proto__ aponta para nomedafunção.prototype, não Object.prototype que é quando criamos um objeto a partir do new Object ou a partir do objeto literal por padrão o protótipo dele é o Object.prototype, no caso da função construtora quando criamos objetos com operador new ele aponta para o atributo prototype daquela função.
console.log(meuObjeto.prototype === obj1.__proto__); // output: true

meuObjeto.prototype.nome = 'Anônimo';
meuObjeto.prototype.falar = function () {
    console.log(`Bom dia! meu nome é ${this.nome}`);
};

obj1.falar();
obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();
console.log(`--------------------------------------------------`);

// Resumindo a loucura
console.log((new meuObjeto).__proto__ === meuObjeto.prototype);
console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);