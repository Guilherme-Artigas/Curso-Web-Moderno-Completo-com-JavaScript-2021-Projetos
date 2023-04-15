class Avo {
    constructor (p1) {
        this.lastname = p1;
    };
};

class Pai extends Avo {
    constructor (p1, p2 = 'Professor') {
        super(p1);
        this.profissao = p2
    };
};

class Filho extends Pai {
    constructor () {
        super('Silva');
    };
};

const filho = new Filho;
console.log(filho);
