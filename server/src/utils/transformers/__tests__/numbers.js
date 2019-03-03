/* global expect, test, describe */

const {
  handleToRomanNumeral,
  handleRomanNumeralToNumber
} = require("../numbers");

// describe("handleToRomanNumeral test suite", () => {
//   test("0 should be empty string", () => {
//     expect(handleToRomanNumeral(0)).toBe("");
//   });
//   test("1 should be I", () => {
//     expect(handleToRomanNumeral(1)).toBe("I");
//   });
//   test("147 should be CXLVII", () => {
//     expect(handleToRomanNumeral(147)).toBe("CXLVII");
//   });
//   test("3999 should be MMMCMXCIX", () => {
//     expect(handleToRomanNumeral(3999)).toBe("MMMCMXCIX");
//   });
// });

describe("handleRomanNumeralToNumber test suite", () => {
  test("I should be 1", () => {
    expect(handleRomanNumeralToNumber("I")).toBe(1);
  });
  test("CXLVII should be 147", () => {
    expect(handleRomanNumeralToNumber("CXLVII")).toBe(147);
  });
  test("MMMCMXCIX should be 3999", () => {
    expect(handleRomanNumeralToNumber("MMMCMXCIX")).toBe(3999);
  });
});
