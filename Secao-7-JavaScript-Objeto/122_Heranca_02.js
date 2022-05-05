// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0';
const avo = {
    attr1: 'A',
};
const pai = {
    attr2: 'B',
    attr3: '3',
    __proto__: avo,
};
const filho = {
    attr3: 'C',
    __proto__: pai,
};

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // Para de procurar quando encontra.
console.log(`-----------------------------------------------------------`)

const carro = {
    vAtual: 0,
    vMax: 200,
    acelerar (delta) {
        // delta = diferença que queremos acelerar.
        if (this.vAtual + delta <= this.vMax) {
            this.vAtual += delta;
        } else {
            this.vAtual = this.vMax;
        };
    },
    status () {
        return `${this.vAtual}Km/h de ${this.vMax}Km.h`;
    },
};

const ferrari = {
    modelo: 'F40',
    vMax: 324, // Shadowing / Sombreamento
    __proto__: carro,
};

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`; // da mesma forma que usamos o this para referenciar o objeto atual, usamos o super para referenciar o protótipo.
    },
    __proto__: carro,
};

// Object.setPrototypeOf(ferrari, carro); // 1º param: objeto, 2º param: proto
// Object.setPrototypeOf(volvo, carro); // 1º param: objeto, 2º param: proto

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(300);
console.log(ferrari.status());
