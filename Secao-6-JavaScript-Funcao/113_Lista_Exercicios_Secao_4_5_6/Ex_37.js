/*
    37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , bem como a soma dos elementos.
*/

// a1 + (n - 1) * r

function PA (n, a1, r) {
    const an = a1 + (n - 1) * r;
    const sn = (a1 + an) * n / 2;
    return sn;
};

// console.log(PA(10, 26, 5));

function PG (n, a1, r) {
    const q = n - 1;
    const an = a1 * r ** q;
    const sn = a1 * (q ** n - 1) / (q - 1);
    return an;    
};

console.log(PG(10, 1, 2));