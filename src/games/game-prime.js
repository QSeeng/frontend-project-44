import readlineSync from 'readline-sync';
import {
  greetingUser, getRandomInt,
} from '../index.js';

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

const playPrimeGame = () => {
  const textRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const userName = greetingUser(textRule);
  let currentCount = 0;

  while (currentCount < 3) {
    const num = getRandomInt();
    console.log(`Question: ${num}`);
    const correctAnswer = findPrimeNumber(num);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (correctAnswer === userAnswer) {
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

export default playPrimeGame;
