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

let middle = function(array) {
  let array1 = [];
  if (array.length <= 2) {
    return array1;
  } else if ((array.length % 2) !== 0) {
    let i = Math.floor(array.length / 2);
    array1.push(array[i]);
    return array1;
  } else if ((array.length % 2) === 0) {
    let j = array.length / 2;
    let k = j - 1;
    array1.push(array[k], array[j]);
    return array1;
  }
};
assertArraysEqual((middle([1,2,3,4])), [2,3]);

