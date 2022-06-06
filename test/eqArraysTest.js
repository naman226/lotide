const assert = require('chai').assert;
let eqArrays = require('../eqArrays');

describe('#equalArray', () => {
  it('returns true for [1, 2, 3, 4] equal to [1, 2, 3, 4]', () => {
    assert.isTrue(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]));
  });

  it("returns false for [1, 2, 3] equal to [1, 3, 2]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 3, 2]));
  });
});

