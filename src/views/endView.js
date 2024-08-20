import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const createEndScreen = (playerName, totalScore) => {
  const element = document.createElement('div');

  if (totalScore <= 4) {
    element.innerHTML = `<h1> You can do better ${playerName}. Try again and beat your score!</h1>`;
  } else if (totalScore >= 5 && totalScore <= 9) {
    element.innerHTML = `<h1>Good job ${playerName}! You scored well. Keep pushing for that high score!</h1>`;
  } else if (totalScore >= 10) {
    element.innerHTML = `<h1>Congratulations ${playerName}! You're a true champion!</h1>`;
  }

  const RestartButton = document.createElement('button');
  RestartButton.id = `${START_QUIZ_BUTTON_ID}`;
  RestartButton.textContent = 'Restart quiz';
  element.appendChild(RestartButton);

  return element;
};
