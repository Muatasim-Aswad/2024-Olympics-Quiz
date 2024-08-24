import { createWelcomeElement } from '../views/welcome_page/welcomeView.js';
import { createDifficultySelectorElement } from '../views/welcome_page/difficultySelectorView.js';

import { initQuestionPage } from './questionPage.js';

import { quizData } from '../data.js';
import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  DIFFICULTY_SELECTOR_ID,
  INPUT_NAME_ID,
} from '../constants.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  //difficulty selector
  userInterface.appendChild(createDifficultySelectorElement());
  const selector = document.getElementById(DIFFICULTY_SELECTOR_ID);

  selector.addEventListener('input', () => {
    quizData.difficulty = Number(selector.value);
  });

  //inputElement: get player name
  const inputElement = document.getElementById(INPUT_NAME_ID);
  const startButton = document.getElementById(START_QUIZ_BUTTON_ID);

  setTimeout(() => {
    inputElement.focus();
  }, 0);

  inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      startButton.click();
    }
  });

  startButton.addEventListener('click', () => {
    quizData.playerName = inputElement.value;
    initQuestionPage();
  });
};
