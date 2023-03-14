const firstAndLast = (list) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (i === 0 || i === list.length - 1) {
      if (typeof list[i] === 'number') {
        newList.push(parseInt(list[i]));
      } else {
        newList.push(list[i]);
      }
    }
  }
  return newList;
};

console.log(firstAndLast([7.14, 'olá']));
console.log(firstAndLast([-100, 'aplicativo', 16]));
