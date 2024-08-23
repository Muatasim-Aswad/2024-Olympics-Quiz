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

  const inputElement = element.querySelector(`#${INPUT_NAME_ID}`);
  const startButton = element.querySelector(`#${START_QUIZ_BUTTON_ID}`);

  setTimeout(() => {
    inputElement.focus();
  }, 0);

  startButton.addEventListener('click', () => {
    const playerName = inputElement.value;
    quizData.playerName = playerName;
  });

  inputElement.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      startButton.click();
    }
  });
  return element;
};
