import getRandomInt from '../random-number.js';
import launchGame from '../index.js';

const textRule = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisor(num1, num2);
  return [question, String(correctAnswer)];
};

const playGcdGame = () => {
  launchGame(textRule, getQuestionAndAnswer);
};

export default playGcdGame;
