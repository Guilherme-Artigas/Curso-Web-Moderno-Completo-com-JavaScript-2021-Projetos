const ferrari = {
    modelo: 'F40',
    velMax: 324
};

const volvo = {
    modelo: 'V40',
    velMax: 200
};

console.log(ferrari.__proto__); // Prototipo de ferrari é um objeto vazio, mais existe e esta presente.
console.log(ferrari.__proto__ === Object.prototype); // output: true
console.log(volvo.__proto__ === Object.prototype); // output: true
console.log(Object.prototype.__proto__ === null); // output: true

function meuObjeto () { };
console.log(typeof Object, typeof meuObjeto); // output: function function
console.log(Object.prototype, meuObjeto.prototype); // output: {} meuObjeto {}

// Um objeto em JavaScript ele tem uma referencia para o seu protótipo e essa e a forma como JavaScript define herança, a partir da referencia para um protótipo, você tem referencia para um outro objeto, e esse objeto tem atributos e comportamentos, que podem ser acessados a partir do objeto filho, podemos colocar um atributo que não existe no filho, e então ele vai procurar no protótipo pai, caso não encontre vai procurar no pai do pai (avô), vai percorrendo a cadeia de protótipos ate encontrar aquele determinado atributo. Essa é uma forma de ter reuso de código, não ter que replicar os mesmos atributos as mesmas funções em todos os objetos, e a forma de acessar de dentro de um objeto o protótipo dele é a partir do atributo __proto__