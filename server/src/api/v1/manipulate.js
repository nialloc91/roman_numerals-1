const {
  handleNumberToRomanNumeral,
  handleRomanNumeralToNumber
} = require("../models/v1/manipulate");
const { handleResponse, log } = require("../../utils/utils");
const {
  handleToRomanNumeral,
  handleRomanNumeralToNumber: handleToNumber
} = require("../../utils/transformers/numbers");

/**
 * @param {*} req
 * @param {*} res
 * @description manipulates an integer and returns roman numerals or an integer
 * @returns {*} response
 */
const handleNumber = async (req, res) => {
  try {
    await handleNumberToRomanNumeral(req);

    const {
      params: { value }
    } = req;

    const result = await handleToRomanNumeral(value);

    res.status(200).send(handleResponse({ result }));
  } catch ({ code = 500, message }) {
    log("error", { code, message });
    res.status(code).send(message);
  }
};

/**
 * @param {*} req
 * @param {*} res
 * @description manipulates an integer and returns roman numerals or an integer
 * @returns {*} response
 */
const handleRomanNumeral = async (req, res) => {
  try {
    await handleRomanNumeralToNumber(req);

    const {
      params: { value }
    } = req;

    const result = await handleToNumber(value);

    if (result > 3999) {
      // edge case where number is out of bounds. Improvement if possible to check this on client before sending to server without converting.
      const code = 400;
      const message = "Value provided must be between I and MMMCMXCIX.";
      log("error", { code, message });

      res.status(400).send(message);
    } else {
      res.status(200).send(handleResponse({ result }));
    }
  } catch ({ code = 500, message }) {
    log("error", { code, message });
    res.status(code).send(message);
  }
};

module.exports = {
  handleNumber,
  handleRomanNumeral
};
