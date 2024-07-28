import readlineSync from 'readline-sync';
import {
  getRandomInt, greetingUser,
} from '../index.js';

const playEvenGame = () => {
  const textRule = ('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = greetingUser(textRule);
  let currentCount = 0;

  while (currentCount < 3) {
    const num = getRandomInt();
    console.log(`Question: ${num}`);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === userAnswer) {
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

export default playEvenGame;
