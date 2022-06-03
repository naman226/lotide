let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKey = function(objects, callback) {
  for (let key of Object.keys(objects)) {
    if ((callback(objects[key]))) {
      return key;
    }
  }
};
//Testing
let movies = {
  action: "Die Hard",
  comedy: "Hangover",
  romantic: "Titanic",
  crime: "Wanted"
};

let test1 = findKey(movies, x => x === "Hangover");

let test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(test2, "noma");
assertEqual(test1, "comedy");