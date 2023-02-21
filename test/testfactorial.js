/* eslint-disable no-undef */
const { assert } = require("chai");
const factorial = require("../factorial");

describe("Factorial unit test", () => {
  // eslint-disable-next-line prettier/prettier
  
  it("Factorial test", () => {
    assert.equal(factorial(3), 6);
  });

  it("Factorial test", () => {
    assert.equal(factorial(7), 7 * 6 * 5 * 4 * 3 * 2 * 1);
  });
});
