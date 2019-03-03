/**
 * @description converts a number to roman numeral
 * @see https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html
 * @param {int} number
 * @returns {string}
 */
const handleToRomanNumeral = number => {
  // a map is used because it keeps the order of the values passed in. Also a map has a foreach method available to it.
  const romanNumeralMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]);

  let parsedNumber = parseInt(number, 10);

  let result = "";

  romanNumeralMap.forEach((value, key) => {
    // get number of times the curr value in the map can be divided into the parsedNumber
    const numOfTimes = Math.floor(parsedNumber / key);

    if (parsedNumber > 0 && numOfTimes > 0) {
      // add the same number of times it can be divided by to the string
      result = `${result}${value.repeat(numOfTimes)}`;

      // take away the value from the original value
      parsedNumber -= key * numOfTimes;
    }
  });

  return result;
};

/**
 * @description converts a roman numeral to integer
 * @see https://www.rapidtables.com/convert/number/how-roman-numerals-to-number.html
 * @param {string} romanNumeral
 * @returns {int}
 */
const handleRomanNumeralToNumber = romanNumeral => {
  // this map is only a list of single roman numeral characters becase we go character by character either adding or taking away from total. i.e IV = - 1 + 5
  const romanNumeralMap = new Map([
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1]
  ]);

  const splitString = romanNumeral.split("");

  const result = splitString.reduce((total, curr, currentIndex, array) => {
    const nextChar = array[currentIndex + 1];

    const current = romanNumeralMap.get(curr);
    const next = nextChar ? romanNumeralMap.get(nextChar) : -1; // -1 will always be less than the current

    if (!next || current >= next) {
      return total + current;
    }

    return total - current;
  }, 0);

  return result;
};

module.exports = {
  handleToRomanNumeral,
  handleRomanNumeralToNumber
};
