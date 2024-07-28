import readlineSync from 'readline-sync';
import {
  getRandomInt, greetingUser, getRandomItem,
} from '../index.js';

const Calc = (operator1, operation, operator2) => {
  let result;
  switch (operation) {
    case '+': result = operator1 + operator2;
      break;
    case '-': result = operator1 - operator2;
      break;
    case '*': result = operator1 * operator2;
      break;
  }
  return result;
};

const playCalcGame = () => {
  const textRule = 'What is the result of the expression?';
  const userName = greetingUser(textRule);
  let currentCount = 0;

  while (currentCount < 3) {
    const operation = ['+', '-', '*'];
    const operator1 = getRandomInt();
    const operator2 = getRandomInt();
    const randomOperation = getRandomItem(operation);
    console.log(`Question: ${operator1} ${randomOperation} ${operator2}?`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = Calc(operator1, randomOperation, operator2);

    if (Number(correctAnswer) === Number(userAnswer)) {
      console.log('Correct!');
      currentCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;
