import { REMAINING_QUESTIONS_ID } from '../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createRemainingElement = (remainingQuestions = 0) => {
  const element = document.createElement('p');
  element.id = REMAINING_QUESTIONS_ID;

  element.innerHTML = String.raw`
    Remaining Questions: ${remainingQuestions}
  `;

  return element;
};
