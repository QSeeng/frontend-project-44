import readlineSync from 'readline-sync';
import {
	greetingUser, getRandomInt, 
} from "../index.js";

const findPrimeNumber = (num) => {
	if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
				return 'no';
      }
    }
    return 'yes';
  }
};

const playPrimeGame = () => {
	const textRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
	const userName = greetingUser(textRule);
	let currentCount = 0;

	while (currentCount < 3) {
		const num = getRandomInt()
		console.log(`Question: ${num}`);
		const correctAnswer = findPrimeNumber(num);
		const userAnswer = readlineSync.question('Your Answer: ');
		if (correctAnswer === userAnswer) {
			console.log('correct!');
			currentCount++;
		} else {
			console.log(`${userAnswer} is wrong answer ;(. correct answer is ${correctAnswer}`);
			console.log(`Let's try again, ${userName}`);
			return;
		}
	}
	console.log(`Congratulation, ${userName}!`);
};

export default playPrimeGame;