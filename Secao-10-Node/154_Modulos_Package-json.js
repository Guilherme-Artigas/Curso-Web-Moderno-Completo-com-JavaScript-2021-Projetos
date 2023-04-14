const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const { get } = require('axios');

const getEmployee = async () => {
  const { data } = await get(URL);
  const employee = data
    .filter(e => e.genero === 'F' && e.pais === 'China')
    .sort((a, b) => a.salario - b.salario)[0];
  return console.log(employee);
}; getEmployee();
