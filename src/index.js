import readlineSync from 'readline-sync';

const maxCount = 3;

const launchGame = (textRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(textRule);
  let currentCount = 0;

  while (currentCount < maxCount) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

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

export default launchGame;
