import {
  getRandomInt, getRandomItem, launchGame,
} from '../index.js';

const textRule = 'What is the result of the expression?';

const Calc = (operand1, operation, operand2) => {
  let result;
  switch (operation) {
    case '+': result = operand1 + operand2;
      break;
    case '-': result = operand1 - operand2;
      break;
    case '*': result = operand1 * operand2;
      break;
    default:
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const operation = ['+', '-', '*'];
  const randomOperation = getRandomItem(operation);
  const question = `${operand1} ${randomOperation} ${operand2}`;
  const correctAnswer = Calc(operand1, randomOperation, operand2);
  return [question, String(correctAnswer)];
};

const playCalcGame = () => {
  launchGame(textRule, getQuestionAndAnswer);
};

export default playCalcGame;
