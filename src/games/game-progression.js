import getRandomInt from '../random-number.js';
import launchGame from '../index.js';

const textRule = 'What number is missing in the progression?';

const createProgression = (array) => {
  const length = 10;
  const progression = [2, 3, 4];
  const randomProgression = progression[getRandomInt(0, progression.length)];
  const inArray = array;
  for (let i = 1; inArray.length < length; i += 1) {
    inArray[i] = inArray[i - 1] + randomProgression;
  }
  return array;
};

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomInt();
  const array = [randomNumber];
  createProgression(array);
  const randomItem = getRandomInt(0, array.length);
  const correctAnswer = array.splice(randomItem, 1, '..');
  const question = `${array.join(' ')}`;
  return [question, String(correctAnswer)];
};

const playProgressionGame = () => {
  launchGame(textRule, getQuestionAndAnswer);
};
export default playProgressionGame;
