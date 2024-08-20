import { createEndScreen } from '../views/endView.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { startQuiz } from './welcomePage.js';
import { quizData } from '../data.js';
import { countScore } from './questionPage.js';

export const initEndPage = () => {
  const userInterface = document.getElementById(`${USER_INTERFACE_ID}`);
  userInterface.innerHTML = '';

  const scoreView = countScore();
  const totalScore = scoreView[1]; // the index based on countScore function return value

  const endPageElement = createEndScreen(quizData.playerName, totalScore);
  userInterface.appendChild(endPageElement);

  const restartQuiz = () => {
    quizData.currentQuestionIndex = 0;

    startQuiz();
  };
  document
    .getElementById(`${START_QUIZ_BUTTON_ID}`)
    .addEventListener('click', restartQuiz);
};
