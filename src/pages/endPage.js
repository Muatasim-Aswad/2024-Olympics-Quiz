import { createEndScreen } from '../views/endView.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { countScore } from './questionPage.js';
import { initQuestionPage } from './questionPage.js';
import { RESTART_BUTTON } from '../constants.js';

export const initEndPage = () => {
  const userInterface = document.getElementById(`${USER_INTERFACE_ID}`);
  userInterface.innerHTML = '';

  const scoreView = countScore();
  const totalScore = scoreView[1]; // the index based on countScore function return value

  const gifElement = document.getElementById('gif');
  let gifSrc = '';
  if (totalScore <= 4) {
    gifSrc = '../public/img/fail-run.gif';
  } else if (totalScore >= 5 && totalScore <= 9) {
    gifSrc = '../public/img/almost-there.gif';
  } else if (totalScore === 10) {
    gifSrc = '../public/img/medals-show-off.gif';
  }

  const endPageElement = createEndScreen(
    quizData.playerName,
    totalScore,
    gifSrc
  );
  userInterface.appendChild(endPageElement);

  const restartQuiz = () => {
    quizData.currentQuestionIndex = 0;

    quizData.questions.forEach((question) => {
      question.selected = null;
    });

    initQuestionPage();
  };

  document
    .getElementById(`${RESTART_BUTTON}`)
    .addEventListener('click', restartQuiz);
};
