const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;


// console.log(assertObjectsEqual({ 1: 1, 2: 2, 3: 3}, {1: 1, 2: 2, 3: 3}));