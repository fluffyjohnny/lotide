
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false);

describe('#eqArrays', () => {
  it('should return true if arr1 === arr2', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('should return false if arr1 !== arr2', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2]));
  });
});