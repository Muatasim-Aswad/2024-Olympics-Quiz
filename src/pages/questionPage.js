import {
  createQuestionElement,
  createAnswerElement,
  createScoreElement,
  createRemainingElement,
  createTimerElement,
} from '../views/question_page/index.js';

import { initEndPage } from './endPage.js';

import { quizData } from '../data.js';
import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  TIMER_AUDIO,
  USER_INTERFACE_ID,
} from '../constants.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  addQuestion(currentQuestion, userInterface);
  addAnswersAndTheirEvents(currentQuestion); // answers and their events and handlers
  addAnswerTimer(userInterface); //answer timer
  addProgressInformation(userInterface); //score and remaining questions

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion); //next
};

/*-----sub functions----*/

const addQuestion = (currentQuestion, userInterface) => {
  const questionNumber = quizData.currentQuestionIndex + 1;

  const questionElement = createQuestionElement(
    `${questionNumber}. ${currentQuestion.text}`
  );
  userInterface.appendChild(questionElement);
};

const addAnswersAndTheirEvents = (currentQuestion) => {
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  //buttons logic
  const answerButtons = answersListElement.querySelectorAll('button');

  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener('click', (event) =>
      handleAnswer(event.currentTarget)
    );
  }); //an event listener for every answer button

  const handleAnswer = (clickedButton) => {
    const correctAnswerButton = document.querySelector(
      `[data-key = ${currentQuestion.correct}]`
    );
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
    //stop timer and audio
    clearInterval(timerInterval);
    document.getElementById(TIMER_AUDIO).pause();
  };
};

const addProgressInformation = (userInterface) => {
  //score
  const [correctOnes, completedQuestions] = countScore();

  const scoreElement = createScoreElement(completedQuestions, correctOnes);
  userInterface.appendChild(scoreElement);

  //remaining questions number
  const totalQuestions = quizData.questions.length;
  const remainingQuestions = totalQuestions - completedQuestions;

  const remainingElement = createRemainingElement(remainingQuestions);
  userInterface.appendChild(remainingElement);
};

const addAnswerTimer = (userInterface) => {
  const seconds = 60 / quizData.difficulty;

  const timerElement = createTimerElement(formatter(seconds));
  userInterface.appendChild(timerElement);

  timer(seconds, timerElement);
};

const nextQuestion = () => {
  clearInterval(timerInterval);

  if (quizData.currentQuestionIndex >= quizData.questions.length - 1) {
    // load end page  after one and a half seconds
    const [newScore] = countScore();
    if (newScore > quizData.highestScore) quizData.highestScore = newScore;

    setTimeout(initEndPage, 1500);
  } else {
    // If it's not the last question, move to the next question immediately
    quizData.currentQuestionIndex += 1;
    initQuestionPage();
  }
};

/*-----helper functions ----*/

//timer's audio
const playAudio = () => {
  const timerSoundEffect = document.getElementById(TIMER_AUDIO);

  timerSoundEffect.src = '../public/audio/ticking-sound.mp3';
  timerSoundEffect.currentTime = 0; // Reset to start

  if (timerSoundEffect.paused) timerSoundEffect.play(); //run if not running
};

//run & update timer
let timerInterval;
const timer = (seconds, timerElement) => {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds--; //count down
    timerElement.innerText = formatter(seconds); //update view

    if (seconds === 5) playAudio();
    if (seconds === 0) nextQuestion();
  }, 1000);
};

/**
 * @returns {number[]} Array of the questions numbers that is [correct , completed]
 */
export const countScore = () => {
  const completedQuestions = quizData.currentQuestionIndex;
  let correct = 0;

  quizData.questions.forEach((question) => {
    if (question.selected === question.correct) correct++;
  });

  return [correct, completedQuestions];
};

/**
 * @param {number} totalSeconds
 * @returns {string} A string representing the formatted time in "MM:SS" format, MM: minutes and SS: seconds
 */
const formatter = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const format00 = (number) => String(number).padStart(2, '0');

  return `${format00(minutes)}:${format00(seconds)}`;
};
