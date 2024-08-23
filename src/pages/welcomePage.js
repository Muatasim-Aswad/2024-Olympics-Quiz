import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { createSpeedElement } from '../views/speedSliderView.js';
import { quizData } from '../data.js';
import { SPEED_SLIDER_ID } from '../constants.js';
import { SPEED_VIEW } from '../constants.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  //speed slider
  const speedElement = createSpeedElement(quizData.speed);
  userInterface.appendChild(speedElement);
  const slider = document.getElementById(SPEED_SLIDER_ID);

  slider.addEventListener('input', () => {
    quizData.speed = +slider.value;
    document.getElementById(SPEED_VIEW).innerText = `x${quizData.speed}`;
  });

  //start
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

export const startQuiz = () => {
  initQuestionPage();
};
