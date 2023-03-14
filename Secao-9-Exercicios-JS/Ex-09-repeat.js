const repeat = (element, quantity) => {
  const list = [];
  for (let i = 0; i < quantity; i++) {
    list.push(element);
  }
  return list;
};

console.log(repeat('código', 2));
console.log(repeat(7, 3));
