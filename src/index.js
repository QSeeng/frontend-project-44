import readlineSync from 'readline-sync';

const greetingUser = (textRule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(textRule);
  return userName;
};

const min = 1;
const max = 100;

const getRandomInt = (minNum = min, maxNum = max) => {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + min;
};

const getRandomItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const randomItem = array[index];
  return randomItem;
};

const getRandomIndex = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return index;
};

export {
  greetingUser, getRandomInt, getRandomItem, getRandomIndex,
};
