var funcs = [];

for (var indice = 0; indice < 5; indice ++) {
    funcs.push(function() {
        console.log(indice);
    });
};

funcs[2]();
funcs[4]();