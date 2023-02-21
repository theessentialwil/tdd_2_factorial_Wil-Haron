/* eslint-disable no-undef */
const { assert } = require("chai");
const factorial = require("../factorial");

describe("Factorial test-last unit test", () => {
  // eslint-disable-next-line prettier/prettier
  
  it("Factorial test-last one", () => {
    assert.equal(factorial(3), 6);
  });

  it("Factorial test-last two", () => {
    assert.equal(factorial(7), 7 * 6 * 5 * 4 * 3 * 2 * 1);
  });

  it("Factorial test-last final", () => {
    assert.equal(factorial(5), 120);
  });
});
