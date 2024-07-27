import readlineSync from 'readline-sync';
import {
	getRandomInt, greetingUser, getRandomIndex
} from '../index.js';

const playCalcGame = () => {
	const userName = greetingUser();
	console.log('What is the result of the expression?');
	let currentCount = 0;
	while (currentCount < 3) {
		const operator = ['+', '-', '*'];
		const num1 = getRandomInt();
		const num2 = getRandomInt();
		const randomOperator =  getRandomIndex(operator);
		console.log(`Question: ${num1} ${randomOperator} ${num2}?`);
		const userAnswer = readlineSync.question('Your answer: ');
		let correctAnswer;
		switch (randomOperator) {
			case '+': correctAnswer = num1 + num2;
			break;
			case '-': correctAnswer = num1 - num2;
			break;
			case '*': correctAnswer = num1 * num2;
			break;
		}
		
		if (Number(correctAnswer) === Number(userAnswer)) {
			console.log('Correct!');
			currentCount++;
		} else {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${userName}!`);
			currentCount = 0;
		}
	}
	console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;