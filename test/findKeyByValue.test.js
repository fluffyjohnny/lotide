const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe('#findKeyByValue', () => {
  it('should return the object key if value given is present in the object', () => {
    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('should return undefined if the objects-value doesn\'t exist in the given object', () => {
    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
});