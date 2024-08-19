import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  
  const currentQuestionIndex = quizData.currentQuestionIndex;
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  //to give the number for questions
  
  const questionNumber = currentQuestionIndex + 1;
  const questionTextWithNumber = `${questionNumber}. ${currentQuestion.text}`;

  const questionElement = createQuestionElement(questionTextWithNumber);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  const answerButtons = answersListElement.querySelectorAll('button');

  const correctAnswerButton = document.querySelector(
    `[data-key = ${currentQuestion.correct}]`
  );

  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener('click', (event) =>
      handleAnswer(
        event.target,
        currentQuestion,
        answerButtons,
        correctAnswerButton
      )
    );
  });

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const handleAnswer = (
  clickedButton,
  currentQuestion,
  answerButtons,
  correctAnswerButton
) => {
  //disable all answer buttons
  answerButtons.forEach((answerButton) => (answerButton.disabled = true));
  //git the answer key and set it into the data
  currentQuestion.selected = clickedButton.dataset.key;
  //decide the result
  const result = currentQuestion.selected === currentQuestion.correct;
  //show visual feedback
  const styling = result ? 'correct-answer' : 'wrong-answer';
  clickedButton.classList.add(styling);

  if (!result) correctAnswerButton.classList.add('correct-answer');
};
