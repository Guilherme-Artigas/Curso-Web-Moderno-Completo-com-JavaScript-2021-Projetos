const quaseArray = {
    0: 'Guilherme',
    1: 'Jamile',
    2: 'Bryan',
    3: 'Julia',
    4: 'Rafaela',
    // ...
};

console.log(quaseArray); // ouput: { '0': 'Guilherme', '1': 'Jamile', '2': 'Bryan', '3': 'Julia', '4': 'Rafaela' }.
Object.defineProperty(quaseArray, 'toString', {
    value: function () {return Object.values(this)},
    enumerable: false,
});

console.log(quaseArray[0]); // ouput: Guilherme

const meuArray = ['Guilherme', 'Jamile', 'Bryan', 'Julia', 'Rafaela'];
console.log(quaseArray.toString(), meuArray); // ouput: [ 'Guilherme', 'Jamile', 'Bryan', 'Julia', 'Rafaela' ] [ 'Guilherme', 'Jamile', 'Bryan', 'Julia', 'Rafaela' ]