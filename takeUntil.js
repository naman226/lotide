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

const takeUntil = function(array, callback) {
  let newData = [];
  for (let data of array) {
    if (!callback(data)) {
      newData.push(data);
    } else if (callback(data)) {
      break;
    }
  }
  return newData;
};
//Testing
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["I", "like", "to", "win", "and", "learn"];
const results3 = takeUntil(data3, x => x === 'and');
console.log(results3);

const data4 = ["I've", "been", "to", "lalaland"];

assertArraysEqual(results1[2], 5);
assertArraysEqual(results3, [ 'I', 'like', 'to', 'win' ]);
assertArraysEqual(results2, data4);