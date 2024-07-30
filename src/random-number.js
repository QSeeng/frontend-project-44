const minNum = 1;
const maxNum = 100;
const getRandomInt = (min = minNum, max = maxNum) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * max) + min;
};

export default getRandomInt;
