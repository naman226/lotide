let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
  
let words = ["Yo Yo", "Lighthouse", "Labs"];
let tail = function(array) {
  let array1 = array.slice(1);
  return array1;
};
console.log(tail([]));
console.log(tail(words));
assertEqual(words.length, 3);
