/* global expect, test, describe */

const { handleToRomanNumeral } = require("../numbers");

describe("handleToRomanNumeral test suite", () => {
  test("0 should be empty string", () => {
    expect(handleToRomanNumeral(0)).toBe("");
  });
  test("1 should be I", () => {
    expect(handleToRomanNumeral(1)).toBe("I");
  });
  test("147 should be CXLVII", () => {
    expect(handleToRomanNumeral(147)).toBe("CXLVII");
  });
  test("3999 should be MMMCMXCIX", () => {
    expect(handleToRomanNumeral(3999)).toBe("MMMCMXCIX");
  });
});
