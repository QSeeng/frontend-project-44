import {
  getRandomInt, launchGame,
} from '../index.js';

const textRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const findPrimeNumber = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  return 0;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = findPrimeNumber(question);
  return [question, correctAnswer];
};

const playPrimeGame = () => {
  launchGame(textRule, getQuestionAndAnswer);
};

export default playPrimeGame;
