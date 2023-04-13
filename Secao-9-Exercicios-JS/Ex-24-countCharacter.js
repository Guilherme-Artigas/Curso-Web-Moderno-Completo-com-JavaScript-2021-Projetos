const countCharacter = (character, phrase) => {
  let count = 0;
  for (let i of phrase) if (i.includes(character)) count += 1;
  return count;
};

console.log(countCharacter('r', 'A sorte favorece os audazes'));
console.log(countCharacter('c', 'Conhece-te a ti mesmo'));
