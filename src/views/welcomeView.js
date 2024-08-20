import { START_QUIZ_BUTTON_ID, INPUT_NAME_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 class='welcome-title'>Welcome</h1>
    <h2>2024 Olympics Quiz</h2>
    <input id="${INPUT_NAME_ID}" type="text"  name="name" placeholder="Enter your name" required>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  
  element.querySelector(`#${START_QUIZ_BUTTON_ID}`).addEventListener('click', () => {
  const playerName = element.querySelector(`#${INPUT_NAME_ID}`).value;
  quizData.playerName = playerName;
});
  return element;
};
