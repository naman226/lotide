let eqArrays = require('./eqArrays');

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅ Arrays match");
    return true;
  } else {
    console.log("🛑🛑 Arrays do not match");
    return false;
  }
};
module.exports = assertArraysEqual;
