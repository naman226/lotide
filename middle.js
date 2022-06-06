
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

module.exports = middle;


