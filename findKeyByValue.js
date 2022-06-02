
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKeyByValue = function(receieveObject, search) {
  for (let key of Object.keys(receieveObject)) {
    if (receieveObject[key] === search) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const bestGame = {
  outdoor: "football",
  indoor: "TT",
  hybrid: "cricket"
};
console.log(findKeyByValue(bestGame, "cricket"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestGame, "cricket"), "hybrid");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);