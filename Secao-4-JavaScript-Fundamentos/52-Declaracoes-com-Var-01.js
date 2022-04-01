{
    {
        {
            {
                var sera = 'Será????'; // Mesmo dentro de vários blocos, está em escopo global.
            };
        };
    };
};

console.log(sera);

function local() {
    var escopo_local = 123;
    console.log(escopo_local);
};

console.log(escopo_local); // Retorna erro, pois, foi declarada dentro de function.