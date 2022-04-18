function Carro (parametro1 = 200, parametro2 = 5) {
    // atributo privado
    let velocidade_Atual = 0;

    // metodo publico
    this.acelerar = () => {
        if (velocidade_Atual + parametro2 <= parametro1) {
            // true
            // velocidade_Atual = velocidade_Atual + parametro2;
            velocidade_Atual += parametro2;
        } else {
            // false
            velocidade_Atual = parametro1;
        };
    };

    // metodo publico
    this.pegar_Velocidade_Atual = () => velocidade_Atual;
};

const uno = new Carro // Instanciar um objeto.
uno.acelerar();
console.log(`Velocidade atual Uno, acelerando 1x = ${uno.pegar_Velocidade_Atual()} km/h`);

const ferrari = new Carro(350, 20) // Instanciando outro objeto.
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(`Velocidade atual Ferrari, acelerando 4x = ${ferrari.pegar_Velocidade_Atual()} km/h`);
