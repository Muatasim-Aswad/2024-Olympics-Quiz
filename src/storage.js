import { is } from './utilities/is.js';
import { LOCAL_STORAGE_HIGH_SCORES } from './constants.js';

export const storageLocal = {
  get highScores() {
    const jsonStr = localStorage.getItem(LOCAL_STORAGE_HIGH_SCORES);
    return jsonStr === null ? [] : JSON.parse(jsonStr); //[] for initializing
  },
  set highScores(highScores) {
    try {
      if (!is(highScores, 'array'))
        throw new TypeError(
          'Failed to store data. Expected an array of numbers.'
        ); //validate input

      const jsonStr = JSON.stringify(highScores);
      localStorage.setItem(LOCAL_STORAGE_HIGH_SCORES, jsonStr);

      if (!is(this.highScores, highScores))
        throw new Error('Failed to store data. Storage related issue.');
    } catch (error) {
      console.error(error.message);
    }
  },
};
