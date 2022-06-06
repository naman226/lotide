let assertEqual = require('../assertEqual.js');
let tail = require('../tail.js');

let words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail([]));
console.log(tail(words));
assertEqual(tail(words).length, 2);