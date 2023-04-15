function rand({min = 0, max = 1000} = {}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const obj = {min: 40, max: 50};
console.log(rand(obj));
console.log(rand({min: 955}));
console.log(rand({}));
// Na linha acima não teremos problema, pois, passamos um objeto vazio, e a função tem parâmetros padrão para tratar e retornar valores.
console.log(rand());
// Na linha acima vai dar problema, caso não declaremos um objeto vazio como valor padrão.