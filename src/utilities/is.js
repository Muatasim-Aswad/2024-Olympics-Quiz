/**
 * Checks if a variable matches a specified type or value, and optionally checks additional pairs of variables and types or values.
 * It can deeply compare Arrays.
 * Array, null, and NaN are distinguished types here.
 *
 * @param {*} variable - The variable to check.
 * @param {string|array|*} [expectedMatch=''] - The type or value to check against. This can be:
 *  - A string representing a data type (e.g., 'string', 'number', 'array', etc.).
 *  - A specific value to match (e.g., 42, 'hello', [1, 2, 3]).
 *  - An array of possible values that the variable can match.
 *  - If an array is provided as the expected value, the comparison will be deep (i.e., element by element).
 * @param {...*} rest - Additional pairs of variables and types or values to check.
 * @returns {boolean} - Returns true if all checks pass, otherwise false.
 * @throws {RangeError} - Throws an error if the number of arguments is odd.
 *
 * @example
 * // Check if a variable is a string
 * const isString = is('hello', 'string');
 * console.log(isString); // true
 *
 * @example
 * // Check if multiple variables match specified types or values
 * const result = is('hello', 'string', 42, 'number', [1, 2, 3], 'array');
 * console.log(result); // true
 *
 * @example
 * // Check if a variable matches one of multiple values in an array
 * const isOneOf = is('b', ['a', 'b', 'c']);
 * console.log(isOneOf); // true
 *
 * @example
 * // Validate multiple variables with mixed types and values
 * const variable = 'hello';
 * const anotherVariable = 42;
 * const thirdVariable = 'b';
 * if (is(variable, 'string', anotherVariable, 42, thirdVariable, ['a', 'b', 'c'])) {
 *   // Code to execute if all checks pass
 *   console.log('All checks passed');
 * } else {
 *   // Code to execute if any check fails
 *   console.log('A check failed');
 * }
 *
 * @example
 * // Compare two arrays for deep equality
 * const array1 = [1, 2, 3];
 * const array2 = [1, 2, 3];
 * const areArraysEqual = is(array1, array2);
 * console.log(areArraysEqual); // true
 *
 */
export function is(variable, expectedMatch = '', ...rest) {
  rest.unshift(variable, expectedMatch);

  if (rest.length >= 2 && rest.length % 2 !== 0)
    throw new RangeError(
      'The number of arguments must be even and at least two.'
    );

  //check pairs
  //in case of a false check, early return false
  for (let i = 0; i < rest.length; i += 2) {
    const variable = rest[i];
    const expectedMatch = rest[i + 1];

    const check = isItDataType(expectedMatch)
      ? isTypeOf(variable, expectedMatch)
      : isValueOf(variable, expectedMatch);

    if (!check) {
      return false;
    }
  }

  return true;
}

/**
 * Checks if a given value is a recognized JavaScript data type.
 *
 * @param {*} expectedMatch - The value to check if it is a data type.
 * @returns {boolean} - Returns true if the value is a recognized data type, otherwise false.
 */
function isItDataType(expectedMatch) {
  const dataTypes = [
    'string',
    'number',
    'bigint',
    'boolean',
    'symbol',
    'undefined',
    'object',
    'function',
    'array',
    'NaN',
    'null',
  ];

  return dataTypes.includes(expectedMatch);
}

/**
 * Checks if a variable matches a specified data type.
 *
 * @param {*} data - The variable to check.
 * @param {string} type - The data type to check against.
 * @returns {boolean} - Returns true if the variable matches the specified data type, otherwise false.
 */
function isTypeOf(data, type) {
  if (type === 'array') return Array.isArray(data);
  if (type === 'NaN') return Number.isNaN(data);
  if (type === 'null') return data === null;

  // This check ensures that arrays, NaN, and null are not treated as objects or numbers
  if (Array.isArray(data) || Number.isNaN(data) || data === null) return false;

  return typeof data === type;
}

/**
 * Checks if a variable strictly matches a specified value.
 *
 * @param {*} variable - The variable to check.
 * @param {*} value - The value to check against.
 * @returns {boolean} - Returns true if the variable strictly matches the specified value, otherwise false.
 */
function isValueOf(variable, value) {
  if (
    isTypeOf(value, 'array') &&
    isTypeOf(variable, 'array') &&
    variable.length === value.length
  ) {
    return variable.every((element, index) => element === value[index]);
  }

  if (isTypeOf(value, 'array')) {
    return value.includes(variable);
  }

  return variable === value;
}
