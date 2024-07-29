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

const getRandomInt = () => {
  const minNum = 1;
  const maxNum = 100;
  Math.ceil(minNum);
  Math.floor(maxNum);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const getRandomItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const randomItem = array[index];
  return randomItem;
};

const getRandomIndex = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return index;
};

export {
  getRandomInt, getRandomItem, getRandomIndex, launchGame,
};
