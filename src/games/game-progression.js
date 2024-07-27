import readlineSync from 'readline-sync';
import {
	greetingUser, getRandomIndex, getRandomInt, getRandomItem
}  from "../index.js";


const createProgression = (array) => {
	const length = 10;
	const progression = [2, 3, 4];
	const randomProgression = getRandomItem(progression);

	for ( let i = 1; array.length < length; i++) {
		array[i] = array[i - 1] + randomProgression;
	}
	return array;
};

const playProgressionGame = () => {
	const textRule = 'What number is missing in the progression?';
	const userName = greetingUser(textRule);
	let currentCount = 0;

	while (currentCount < 3) {
		const randomNumber = getRandomInt();
		const array = [randomNumber];
		createProgression(array);
		const randomItem = getRandomIndex(array);
		const correctAnswer = array.splice(randomItem, 1, '..');
		console.log(`Question: ${array.join(' ')}`);
		const userAnswer = readlineSync.question('Your answer: ');

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

export default playProgressionGame;