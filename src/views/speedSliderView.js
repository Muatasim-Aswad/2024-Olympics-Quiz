import { SPEED_SLIDER_ID } from '../constants.js';
import { SPEED_SLIDER_CONTAINER_ID } from '../constants.js';
import { SPEED_VIEW } from '../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createSpeedElement = (speed) => {
  const element = document.createElement('div');
  element.id = SPEED_SLIDER_CONTAINER_ID;

  element.innerHTML = String.raw`

    <span class="slider-label">Slow</span>
    <input type="range" min="0" max="11" step="1" id="${SPEED_SLIDER_ID}" value="${speed}">
    <span class="slider-label">Fast</span>
    <p id="${SPEED_VIEW}">x${speed}</p>
  `;

  return element;
};
