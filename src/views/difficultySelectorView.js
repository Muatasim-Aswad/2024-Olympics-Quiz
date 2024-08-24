import {
  DIFFICULTY_SELECTOR_CONTAINER_ID,
  DIFFICULTY_SELECTOR_ID,
} from '../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createDifficultySelectorElement = () => {
  const element = document.createElement('div');
  element.id = DIFFICULTY_SELECTOR_CONTAINER_ID;

  element.innerHTML = String.raw`

    <select id="${DIFFICULTY_SELECTOR_ID}">
      <option value="1" selected>Easy</option>
      <option value="2">Medium</option>
      <option value="3">Hard</option>
      <option value="6">Extreme</option>
    </select>
  `;

  return element;
};
