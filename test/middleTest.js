// let middle = require('../middle');
// let assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual((middle([1,2,3,4])), [2,3]);
// assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);

const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), ([2, 3]));
  });

  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), (['b']));
  });
});