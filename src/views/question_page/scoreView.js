import { SCORE_ID } from '../../constants.js';
/**
 * Create a score element
 * @returns {Element}
 */
export const createScoreElement = (solved = 0, correct = 0) => {
  const element = document.createElement('p');
  element.id = SCORE_ID;

  element.innerHTML = String.raw`
    Score: ${correct}/${solved}
  `;

  return element;
};
