const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js');

describe("#assertEqual", () => {
  it("returns false when values are not equal", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns true when values are equal", () => {
    assert.isTrue(assertEqual(1, 1));
  });
});
