import { HIGH_SCORE_ID } from '../../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createHighScoreElement = (highestScore) => {
  const element = document.createElement('p');
  element.id = HIGH_SCORE_ID;

  element.innerHTML = String.raw`
    Highest Score: ${highestScore}
  `;

  return element;
};
