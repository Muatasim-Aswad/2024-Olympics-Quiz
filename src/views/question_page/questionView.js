import {
  ANSWERS_LIST_ID,
  TIMER_AUDIO,
  NEXT_QUESTION_BUTTON_ID,
} from '../../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <audio id ="${TIMER_AUDIO}"></audio>
    <ul id="${ANSWERS_LIST_ID}"></ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">Next question</button>
  `;

  return element;
};
