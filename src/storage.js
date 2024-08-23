import { LOCAL_STORAGE_HIGH_SCORES } from './constants.js';

export const storageLocal = {
  get highScores() {
    const jsonStr = localStorage.getItem(LOCAL_STORAGE_HIGH_SCORES);
    return jsonStr === null ? [] : JSON.parse(jsonStr); //[] for initializing
  },
  set highScores(highScores) {
    const jsonStr = JSON.stringify(highScores);
    localStorage.setItem(LOCAL_STORAGE_HIGH_SCORES, jsonStr);
  },
};
