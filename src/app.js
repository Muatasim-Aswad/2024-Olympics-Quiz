import { initWelcomePage } from './pages/welcomePage.js';
import { quizData } from './data.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
