import readlineSync from 'readline-sync';
import {
	getRandomInt, greetingUser
} from '../index.js';

const playParityCheck = () => {
	const userName = greetingUser();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	let currentCount = 0;
	while (currentCount < 3) {
		const num = getRandomInt();
		console.log(`Question: ${num}`);
		const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
		const userAnswer = readlineSync.question('Your answer: ');

		if (correctAnswer === userAnswer) {
			currentCount++;
			console.log('Correct!');
		} else {
			console.log(`'${userAnswer}' is wrong answer ;(. correct answer is '${correctAnswer}'.`);
			console.log(`Let's try again, ${userName}!`);
			currentCount = 0;
		}
	}
	console.log(`Congratulations, ${userName}!`);
};

export default playParityCheck;