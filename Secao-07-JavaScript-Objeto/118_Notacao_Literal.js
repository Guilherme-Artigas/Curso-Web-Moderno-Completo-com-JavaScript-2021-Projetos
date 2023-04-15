const um = 1;
const dois = 2;
const tres = 3;

const obj1 = {attr1: um, attr2: dois, attr3: tres};
// Houve uma atualização no ECMAScript2015(ES06) que facilitou a declaração da linha 5, observe a linha 7.
const obj2 = {um, dois, tres};

console.log(obj1);
console.log(obj2);
console.log(`-------------------------------------------------`);

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
const obj4 = {[nomeAttr]: valorAttr};
console.log(obj3);
console.log(obj4);
console.log(`-------------------------------------------------`);

const obj5 = {
    funcao1: function () {

    },
    funcao2 () {

    }
};
console.log(obj5);
