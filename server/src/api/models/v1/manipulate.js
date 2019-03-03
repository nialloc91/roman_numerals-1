/**
 * @description validates a call to the number to roman numeral endpoint
 * @param {*} req
 * @returns {<Promise>}
 */
const handleNumberToRomanNumeral = async req => {
  const {
    params: { value }
  } = req;

  const parsedValue = Number(value);

  // if value is not an integer
  if (!Number.isInteger(parsedValue)) {
    return Promise.reject({ code: 400, message: "Invalid type supplied." });
  }

  // if value is out of bounds
  if (parsedValue < 1 || parsedValue > 3999) {
    return Promise.reject({
      code: 400,
      message: "Value provided must be greater then 0 and less then 4000."
    });
  }

  return Promise.resolve();
};

/**
 * @description validates a call to the roman numeral endpoint
 * @param {*} req
 * @returns {<Promise>}
 */
const handleRomanNumeralToNumber = async req => {
  const {
    params: { value }
  } = req;
  // if value is not an integer
  if (typeof value !== "string") {
    return Promise.reject({ code: 400, message: "Invalid type supplied." });
  }

  if (!/^[M,D,C,L,X,V,I]+$/g.test(value)) {
    return Promise.reject({
      code: 400,
      message: "Value can only contain [M,D,C,L,X,V,I]."
    });
  }

  return Promise.resolve();
};

module.exports = {
  handleNumberToRomanNumeral,
  handleRomanNumeralToNumber
};
