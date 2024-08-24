import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { createDifficultySelectorElement } from '../views/difficultySelectorView.js';
import { quizData } from '../data.js';
import { DIFFICULTY_SELECTOR_ID } from '../constants.js';

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

  //start
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', initQuestionPage);
};
