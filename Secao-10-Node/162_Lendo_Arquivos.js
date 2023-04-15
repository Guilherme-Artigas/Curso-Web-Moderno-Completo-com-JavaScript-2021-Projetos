const fs = require('fs');
// const path = require('path');

const caminho = __dirname + '/162_Exemplo.json';

// Sincrono
const leituraSincrona = fs.readFileSync(caminho, 'utf-8');
console.log('Leitura de arquivos de forma sincrona')
console.log(leituraSincrona);

console.log();

// Assincrono
console.log('Leitura de arquivos de forma assincrona')
fs.readFile(caminho, (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});

console.log();

console.log('Lendo conteúdo de um diretório');
fs.readdir(__dirname, (err, arquivos) => {
  if (err) throw err;
  console.log(`Esses são todos os arquivos contidos no diretório atual ${__dirname}`);
  console.log(arquivos);
});
