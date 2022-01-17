const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['hi', 'hello', 'hey', 'henlo']), ['hello', 'hey']);
assertArraysEqual(middle(['hi', 'hello', 'nihao', 'hey', 'henlo']), ['nihao']);
console.log(middle([1]));
console.log(middle([1, 2]));