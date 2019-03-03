/**
 * @description validates whether an number is greater than min
 * @param {{number}} min - value
 * @returns {string | undefined}
 */
export const validateMinValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

/**
 * @description validates whether an email has been entered
 * @param {{number}} max - value
 * @returns {string | undefined}
 */
export const validateMaxValue = max => value =>
  value && value > max ? `Must be at most ${max}` : undefined;

/**
 * @description validates whether a value is is present
 * @param {{*}} value - value
 * @returns {string | undefined}
 */
export const validateRequired = value =>
  !!value ? undefined : "You must input a value.";

/**
 * @description validates whether a value is a valid roman numeral
 * @param {{*}} value - value
 * @returns {string | undefined}
 */
export const validateRomanNumeral = value =>
  /^[M,D,C,L,X,V,I]+$/g.test(value)
    ? undefined
    : "Roman numerals can only contain M,D,C,L,X,V or I.";

/**
 * @description returns an error if one is found by validators
 * @param {[func]} validators
 * @param {*} value
 */
export const pipeline = (validators, value) => {
  const result = validators.reduce(
    (result, validator) => {
      if (result.error) return result;

      const error = validator(result.value);

      if (error) {
        result.error = error;
      }

      return result;
    },
    { value, error: undefined }
  );

  return result.error;
};

export const generateRomanNumeralEndpoint = value =>
  `/api/v1/manipulate/${value}`;
