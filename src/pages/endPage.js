import { createEndScreen } from '../views/end_page/endView.js';
import { createHighScoreElement } from '../views/end_page/highScoreView.js';

import { countScore } from './questionPage.js';
import { initWelcomePage } from './welcomePage.js';

import { quizData } from '../data.js';
import { USER_INTERFACE_ID, RESTART_BUTTON } from '../constants.js';

export const initEndPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const [, totalScore] = countScore();
  const [text, gifSrc] = getFeedback(totalScore);

  userInterface.appendChild(createEndScreen(totalScore, text, gifSrc));

  userInterface.appendChild(createHighScoreElement(quizData.highestScore));

  document
    .getElementById(RESTART_BUTTON)
    .addEventListener('click', restartQuiz);
};

const getFeedback = (totalScore) => {
  const textFeedback =
    totalScore < 5
      ? `You can do better ${quizData.playerName}. Try again and beat your score!`
      : totalScore < 10
      ? `Good job ${quizData.playerName}! You scored well. Keep pushing for that high score!`
      : `Congratulations ${quizData.playerName}! You're a true champion!`;

  const gifFeedbackSrc =
    totalScore < 5
      ? '../public/img/fail-run.gif'
      : totalScore < 10
      ? '../public/img/almost-there.gif'
      : '../public/img/medals-show-off.gif';

  return [textFeedback, gifFeedbackSrc];
};

const restartQuiz = () => {
  quizData.currentQuestionIndex = 0;

  quizData.questions.forEach((question) => {
    question.selected = null;
  });

  initWelcomePage();
};
