const increment = (number) => {
  return number + 1;
};

const decrement = (number) => {
  let finalNumber = number - 1;
  if (finalNumber < 0) return 0;
  else return finalNumber;
};

export default { increment, decrement };