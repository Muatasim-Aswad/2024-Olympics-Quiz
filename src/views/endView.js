import { RESTART_BUTTON, START_QUIZ_BUTTON_ID } from '../constants.js';

export const createEndScreen = (playerName, totalScore, gifs) => {
  const element = document.createElement('div');
  element.id = 'scoreFeedback';

  if (totalScore <= 4) {
    element.innerHTML = `<p id = 'scoreView'>Your total score: ${totalScore}/10 </p>
    <h2 id= 'feedbackText'> You can do better ${playerName}. Try again and beat your score!</h2>
    <img id='gif' src='${gifs}'>`;
  } else if (totalScore >= 5 && totalScore <= 9) {
    element.innerHTML = `<p id = 'scoreView'>Your total score: ${totalScore}/10 </p>
    <h2 id= 'feedbackText'>Good job ${playerName}! You scored well. Keep pushing for that high score!</h2>
    <img id='gif' src='${gifs}'>`;
  } else if (totalScore >= 10) {
    element.innerHTML = `<p id = 'scoreView'>Your total score: ${totalScore}/10 </p>
    <h2 id= 'feedbackText'>Congratulations ${playerName}! You're a true champion!</h2>
    <img id='gif' src='${gifs}'>`;
  }

  const RestartButton = document.createElement('button');
  //RestartButton.id = `${START_QUIZ_BUTTON_ID}`;
  RestartButton.id = `${RESTART_BUTTON}`;
  RestartButton.textContent = 'Restart quiz';
  element.appendChild(RestartButton);

  return element;
};
