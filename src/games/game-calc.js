import getRandomInt from "../random-number.js";
import launchGame from "../index.js";

const textRule = 'What is the result of the expression?';

const calc = (operand1, operation, operand2) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 + operand2;
    case '*':
      return operand1 + operand2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const operation = ['+', '-', '*'];
  const randomOperation = getRandomInt(operation) * operation.length;
  const question = `${operand1} ${randomOperation} ${operand2}`;
  const correctAnswer = calc(operand1, randomOperation, operand2);
  return [question, String(correctAnswer)];
};

const playCalcGame = () => {
  launchGame(textRule, getQuestionAndAnswer);
};

export default playCalcGame;
