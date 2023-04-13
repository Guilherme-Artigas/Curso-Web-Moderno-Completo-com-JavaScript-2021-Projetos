const bestGrade = (objeto) => {
  const objMap = Object.entries(objeto);
  let newObj = {};
  let listaNotasOrganizadas = [];

  for (let [_k, v] of objMap) {
    const media = v.reduce((acc, cur) => acc += cur, 0) / v.length;
    listaNotasOrganizadas.push(media);
  };

  const melhorNota = listaNotasOrganizadas.sort((a, b) => b - a)[0];

  for (let [k, v] of objMap) {
    const nome = k;
    const nota = v.reduce((acc, cur) => acc += cur, 0) / v.length
    if (nota === melhorNota) newObj = { nome, media: nota };
  };
  
  return newObj;
};

const ESTUDANTES = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
};

console.log(bestGrade(ESTUDANTES));
