let eqArrays = require('./eqArrays');

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅ Arrays match");
  } else {
    console.log("🛑🛑 Arrays do not match");
  }
};
module.exports = assertArraysEqual;
