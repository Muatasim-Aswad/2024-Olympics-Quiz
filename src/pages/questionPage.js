import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createScoreElement } from '../views/scoreView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //add question and answers
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  //buttons logic
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

  //score
  const [solvedQuestions, correctOnes] = countScore();
  const scoreElement = createScoreElement(solvedQuestions, correctOnes);
  userInterface.appendChild(scoreElement);

  //next
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

const countScore = () => {
  let solved = 0;
  let correct = 0;

  quizData.questions.forEach((question) => {
    if (question.selected) {
      solved++;
      if (question.selected === question.correct) correct++;
    }
  });

  return [solved, correct];
};
