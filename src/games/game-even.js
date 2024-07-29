import {
  getRandomInt, launchGame,
} from '../index.js';

const textRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = evenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => {
  launchGame(textRule, getQuestionAndAnswer);
};

export default playEvenGame;
