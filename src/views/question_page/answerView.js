/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');

  element.innerHTML = String.raw`
  <button data-key = ${key}><span>${key})</span>${answerText}</button>
  `;
  return element;
};
