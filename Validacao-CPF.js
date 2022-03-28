var cpf = [1, 5, 8, 0, 0, 6, 9, 0, 6];
// índice  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// console.log(cpf.length);
if (cpf.length < 11) {
    console.log(`Erro! CPF contém 11 números, você digitou apenas ${cpf.length} números.`);
} else if (cpf.length == 11) {
    console.log('CPF válido...')
    console.log('Verificando...');
    console.log('Por favor aguarde!');
}