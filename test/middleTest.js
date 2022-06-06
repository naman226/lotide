let middle = require('../middle');
let assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual((middle([1,2,3,4])), [2,3]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);