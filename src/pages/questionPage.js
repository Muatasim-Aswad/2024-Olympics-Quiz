import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createScoreElement } from '../views/scoreView.js';
import { createRemainingElement } from '../views/remainingQuestionsView.js';
import { quizData } from '../data.js';
import { initEndPage } from './endPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //add question and answers
  const currentQuestionIndex = quizData.currentQuestionIndex;
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionNumber = currentQuestionIndex + 1;
  const questionTextWithNumber = `${questionNumber}. ${currentQuestion.text}`;

  const questionElement = createQuestionElement(questionTextWithNumber);

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
        event.currentTarget,
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

  //remaining questions number
  const totalQuestions = quizData.questions.length;
  const remainingQuestions = totalQuestions - solvedQuestions;

  const remainingElement = createRemainingElement(remainingQuestions);
  userInterface.appendChild(remainingElement);

  //next
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  if (quizData.currentQuestionIndex >= quizData.questions.length - 1) {
    // load end page  after one and a half seconds
    setTimeout(initEndPage, 1500);
  } else {
    // If it's not the last question, move to the next question immediately
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

    initQuestionPage();
  }
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

export const countScore = () => {
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
