const {
  handleRomanNumeral: handleRomanNum
} = require("../models/v1/manipulate");
const { handleResponse, log } = require("../../utils/utils");
const { handleToRomanNumeral } = require("../../utils/transformers/numbers");

/**
 * @param {*} req
 * @param {*} res
 * @description manipulates an integer and returns roman numerals or an integer
 * @returns {*} response
 */
const handleRomanNumeral = async (req, res) => {
  try {
    await handleRomanNum(req);

    const {
      params: { value }
    } = req;

    const romanNumeral = await handleToRomanNumeral(value);

    res.status(200).send(handleResponse({ romanNumeral }));
  } catch ({ code = 500, message }) {
    log("error", { code, message });
    res.status(code).send({ message });
  }
};

module.exports = {
  handleRomanNumeral
};
