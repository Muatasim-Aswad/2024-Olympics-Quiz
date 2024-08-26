import { RESTART_BUTTON } from '../../constants.js';

export const createEndScreen = (totalScore, feedbackText, gifs) => {
  const element = document.createElement('div');
  element.id = 'scoreFeedback';

  element.innerHTML = `
    <p id='scoreView'>Your total score: ${totalScore}/10</p>
    <h2 id='feedbackText'>${feedbackText}</h2>
    <img id='gif' src='${gifs}'>
    <button id='${RESTART_BUTTON}'>Restart quiz</button>
  `;

  return element;
};
