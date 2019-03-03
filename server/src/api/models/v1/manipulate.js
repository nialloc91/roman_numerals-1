/**
 * @description validates a call to the roman numeral endpoint
 * @param {*} req
 * @returns {<Promise>}
 */
const handleRomanNumeral = async req => {
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

  Promise.resolve();
};

module.exports = {
  handleRomanNumeral
};
