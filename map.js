let eqArrays = function(array1 , array2) {
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

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅ Arrays match");
  } else {
    console.log("🛑🛑 Arrays do not match");
  }
};

const words = ["ground", "control", "to", "major", "tom"];
let map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//Testing
const results1 = map(words, word => word[0]);
console.log(results1);

const testArray = ["g", "a", "y"];
const testMatchArray = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results1[0], 'g');
assertArraysEqual(results1, testArray);
assertArraysEqual(results1, testMatchArray);
