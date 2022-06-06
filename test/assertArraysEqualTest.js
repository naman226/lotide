

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertEqualArray', () => {
  it('returns true for [1, 2, 3] equal to [1, 2, 3]', () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for ['a', 'b', 'c'] equal to ['a', 'b', 'd']", () => {
    assert.isFalse(assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'd']));
  });
});
