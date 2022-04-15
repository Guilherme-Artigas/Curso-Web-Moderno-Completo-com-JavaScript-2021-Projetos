let compara_Com_This = function (p1) {
    console.log(this === p1);
};

console.log(`1º Teste`);
compara_Com_This(global); // true
console.log();

const objeto = {};
compara_Com_This = compara_Com_This.bind(objeto);

console.log(`2º Teste`);
compara_Com_This(global); // false
console.log();

console.log(`3º Teste`);
compara_Com_This(objeto); // true
console.log();


let compara_Com_This_Arrow = p1 => console.log(this === p1);

console.log(`4º Teste`);
compara_Com_This_Arrow(global); // false, pois, está dentro de uma arrow function.
console.log();

console.log(`5º Teste`);
compara_Com_This_Arrow(module.exports); // true
console.log();

compara_Com_This_Arrow = compara_Com_This_Arrow.bind(objeto);

console.log(`6º Teste`)
compara_Com_This_Arrow(objeto); // false, arrow function tem prioridade maior.
console.log();

console.log(`7º Teste`);
compara_Com_This_Arrow(module.exports); // true

// Um this de uma função arrow é um this associado ao contexto no qual a função foi escrita, ponto.
