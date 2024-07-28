import readlineSync from 'readline-sync';
import {
  getRandomInt, greetingUser,
} from '../index.js';

const greatestCommonDivisor = (number1, number2) => {
  const num1 = number1;
  const num2 = number2;
  let result1;
  let result2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      result1 = num1 % num2;
    } else {
      result2 = num2 % num1;
    }
  }
  const result = result1 + result2;
  return result;
};

const playGreatestCommonDivisor = () => {
  const textRule = 'Find the greatest common divisor of given numbers.';
  const userName = greetingUser(textRule);
  let currentCount = 0;

  while (currentCount < 3) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = greatestCommonDivisor(num1, num2);

    if (Number(correctAnswer) === Number(userAnswer)) {
      console.log('Correct!');
      currentCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. correct answer is '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGreatestCommonDivisor;
