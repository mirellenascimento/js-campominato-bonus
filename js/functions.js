/**
 * Creates an array with random numbers
 * @param {number} min - the lowest random possible
 * @param {number} max - the hiest random possible
 */
function randomNumber(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}


/**
 * Verifies if a number already exists in an Array
 * @param {number} input - Number to be checked
 * @param {number[]} array - Array with all numbers
 * @returns {boolean} - True if the number is array.
 */
function verify(input, array){
  for (var i = 0; i < array.length; i++) {
    if (input === array[i]){
      return true;
    }
  }
  return false;
}
