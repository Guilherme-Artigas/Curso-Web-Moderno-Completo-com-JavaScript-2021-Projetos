const wordSearch = (word, listOfWords) => listOfWords.filter((w) => w.includes(word));

console.log(wordSearch('Pro', ['Programação', 'Mobile', 'Profissional']));
console.log(wordSearch('python', ['JavaScript', 'Java', 'C++']));
