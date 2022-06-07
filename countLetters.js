// let assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

let countLetters = function(strings) {
  let finalCount = {};
  for (let string of strings) {
    if (string !== ' ') {
      if (finalCount[string]) {
        finalCount[string] += 1;
      } else {
        finalCount[string] = 1;
      }
    }
  }
  return finalCount;
};
module.exports = countLetters;
// console.log(countLetters("lighthouse in the house"));
// assertEqual(countLetters("lightlighter").l, 2);
