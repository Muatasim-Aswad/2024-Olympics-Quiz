import { createEndScreen } from '../views/end_page/endView.js';
import { createHighScoreElement } from '../views/end_page/highScoreView.js';

import { countScore } from './questionPage.js';
import { initWelcomePage } from './welcomePage.js';

import { quizData } from '../data.js';
import { USER_INTERFACE_ID, RESTART_BUTTON } from '../constants.js';

export const initEndPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const scoreView = countScore();
  const totalScore = scoreView[1]; // the index based on countScore function return value

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

  userInterface.appendChild(createHighScoreElement(quizData.highestScore));

  const restartQuiz = () => {
    quizData.currentQuestionIndex = 0;

    quizData.questions.forEach((question) => {
      question.selected = null;
    });

    initWelcomePage();
  };

  document
    .getElementById(RESTART_BUTTON)
    .addEventListener('click', restartQuiz);
};
