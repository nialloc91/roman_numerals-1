import config from "./config";

/**
 * @description returns an endpoint path for converting roman numerals to numbers
 * @param {int} value
 * @returns {string}
 */
export const generateRomanNumeralEndpoint = value =>
  `${config.apiAddress}/v1/manipulate/roman-numeral/${value}`;

/**
 * @description returns an endpoint path for converting numbers to roman numerals
 * @param {string} value
 * @returns {string}
 */
export const generateNumberEndpoint = value =>
  `${config.apiAddress}/v1/manipulate/number/${value}`;
