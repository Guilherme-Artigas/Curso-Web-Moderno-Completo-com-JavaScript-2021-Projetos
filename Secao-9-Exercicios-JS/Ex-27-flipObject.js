// Minha proposta de resolução
const flipObject = (obj) => {
  const objMap = Object.entries(obj);
  let newObj = {};
  for (let [k, v] of objMap) newObj = { ...newObj, [v]: k };
  return newObj;
}; console.log(flipObject({ a: 1, b: 2, c: 3 }));

// Resolução proposta no gabarito 1
// const inverter = (objeto) => {
//   const objetoInvertido = {};
//   Object.entries(objeto).forEach(pcv => {
//     const chave = 0, valor = 1;
//     objetoInvertido[pcv[valor]] = pcv[chave];
//   });
//   return objetoInvertido;
// }; console.log(inverter({ a: 1, b: 2, c: 3 }));

// Resolução proposta no gabarito 2
// const inverter = (objeto) => {
//   const pcvi = Object.entries(objeto)
//     .map(pcv => pcv.reverse());
//   return Object.fromEntries(pcvi);
// }; console.log(inverter({ a: 1, b: 2, c: 3 }));
