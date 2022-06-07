let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// const eqObjects = function(object1, object2) {
//   let keys1 = Object.keys(object1);
//   let keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   } for (let key of keys1) {
//     if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;
// const ab = { ac: "1", b: "23" };
// const ba = { b: "23", ac: "1" };
// const a = { a: "1", b: "23" };
// const b = { b: "24", ac: "1" };
// assertObjectsEqual(ab, ba);
// assertObjectsEqual(a, b);