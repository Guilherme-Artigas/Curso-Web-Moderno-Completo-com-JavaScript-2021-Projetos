const removeVowels = (word) => {
  // const vowels = 'aeiou';
  let newWord = '';
  for (let i of word) if (!'aeiou'.includes(i)) newWord += i;
  return newWord;
};

console.log(removeVowels('Cod3er'));
console.log(removeVowels('Fundamentos'));
