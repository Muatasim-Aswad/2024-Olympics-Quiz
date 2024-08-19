import { START_QUIZ_BUTTON_ID, INPUT_NAME_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 class='welcomeTitle'>Welcome</h1>
    <h2>2024 Olympics Quiz</h2>
    <input id="${INPUT_NAME_ID}" type="text"  name="name" placeholder="Enter your name" required>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
