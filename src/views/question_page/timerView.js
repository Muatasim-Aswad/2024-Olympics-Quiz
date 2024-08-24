import { TIMER_ID } from '../../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createTimerElement = (initialValue) => {
  const element = document.createElement('p');
  element.id = TIMER_ID;

  element.innerHTML = String.raw`
    ${initialValue}
  `;

  return element;
};
