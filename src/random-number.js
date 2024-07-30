const getRandomInt = () => {
  const minNum = 1;
  const maxNum = 100;
  Math.ceil(minNum);
  Math.floor(maxNum);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

export default getRandomInt;
