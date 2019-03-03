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

module.exports = {
  handleToRomanNumeral
};
