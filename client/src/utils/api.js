import config from "./config";

/**
 * @description returns an endpoint path for converting roman numerals
 * @param {int} value
 * @returns {string}
 */
export const generateRomanNumeralEndpoint = value =>
  `${config.apiAddress}/v1/manipulate/roman-numeral/${value}`;
