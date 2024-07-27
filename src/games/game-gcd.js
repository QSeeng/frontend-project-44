import readlineSync from 'readline-sync';
import {
	getRandomInt, greetingUser
} from '../index.js';

const greatestCommonDivisor = (num1, num2) => {
	let result;

	while (num1 != 0 & num2 != 0) {
		if (num1 > num2) {
				num1 = num1 % num2;
		}else {
				num2 = num2 % num1;
		}
	}
		result = num1 + num2;
		return result;
};

const playGreatestCommonDivisor = () => {
	const textRule = 'Find the greatest common divisor of given numbers.';
	const userName = greetingUser(textRule);
	let currentCount = 0;

	while (currentCount < 3) {
		const num1 = getRandomInt();
		const num2 = getRandomInt();
		console.log(`Question: ${num1} ${num2}`);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = greatestCommonDivisor(num1, num2);

		if (Number(correctAnswer) === Number(userAnswer)) {
			console.log('Correct!');
			currentCount++;
		} else {
			console.log(`'${userAnswer}' is wrong answer ;(. correct answer is '${correctAnswer}'.`);
			console.log(`Let's try again, ${userName}!`);
			return;
		}
	}
		console.log(`Congratulations, ${userName}!`);
};

export default playGreatestCommonDivisor;