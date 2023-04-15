const rafflingNumbers = (number) => {
  const drawnNumber = Math.floor(Math.random() * (11 - 1) + 1);
  if (drawnNumber === number) {
    return console.log(`Parabéns! O número sorteado foi o ${drawnNumber}`);
  } else {
    return console.log(`Que pena! O número sorteado foi o ${drawnNumber}`);
  };
};

rafflingNumbers(1);
