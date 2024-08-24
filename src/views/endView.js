import { RESTART_BUTTON } from '../constants.js';

export const createEndScreen = (playerName, totalScore, gifs) => {
  const element = document.createElement('div');
  element.id = 'scoreFeedback';

  let feedbackText;
  if (totalScore <= 4) {
    feedbackText = `You can do better ${playerName}. Try again and beat your score!`;
  } else if (totalScore >= 5 && totalScore <= 9) {
    feedbackText = `Good job ${playerName}! You scored well. Keep pushing for that high score!`;
  } else if (totalScore >= 10) {
    feedbackText = `Congratulations ${playerName}! You're a true champion!`;
  }

  element.innerHTML = `
    <p id='scoreView'>Your total score: ${totalScore}/10</p>
    <h2 id='feedbackText'>${feedbackText}</h2>
    <img id='gif' src='${gifs}'>
  `;

  const restartButton = document.createElement('button');
  //RestartButton.id = `${START_QUIZ_BUTTON_ID}`;
  restartButton.id = `${RESTART_BUTTON}`;
  restartButton.textContent = 'Restart quiz';
  element.appendChild(restartButton);

  return element;
};
