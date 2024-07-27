import readlineSync from 'readline-sync';

const maxNum = 100;

const greetingUser = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${name}!`);
	return name;
};

const getRandomInt = (num = maxNum) => {
	return Math.floor(Math.random() * num);
};


export {
	greetingUser, getRandomInt
};