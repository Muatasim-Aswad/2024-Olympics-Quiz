import { REMAINING_Questions_ID } from '../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createRemainingElement = (remainingQuestions = 0) => {
  const element = document.createElement('p');
  element.id = REMAINING_Questions_ID;

  element.innerHTML = String.raw`
    Remaining Questions: ${remainingQuestions}
  `;

  return element;
};
