const filterObjectByKey = (obj, element) => {
  const listKeys = Object.keys(obj);
  let newObj = {};
  listKeys.forEach((key) => {
    if (key !== element) newObj = { ...newObj, [key]: obj[key] };
  });
  return newObj;
};

console.log(filterObjectByKey({ a: 1, b: 2 }, 'a'));
console.log(filterObjectByKey({ id: 20, nome: 'caneta', descricao: 'Não preenchido' }, 'descricao'));
console.log(Object.is(filterObjectByKey({ a: 1, b: 2 }, 'a'), { a: 1, b: 2 }));
