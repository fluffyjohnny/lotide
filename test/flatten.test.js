const flatten = require('../flatten');
const assert = require('chai').assert;

// console.log(flatten([1, 2, [3, 4], 5]));
// assertArrayEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
// // destructuring assignment

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5] if [1, 2, [3, 4], 5]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
  });
  it('should return undefined if input an empty string', () => {
    assert.isUndefined(flatten([]));
  });
});