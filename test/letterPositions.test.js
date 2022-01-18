const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

// assertArrayEqual(letterPositions('hello').h, [0]);
// assertArrayEqual(letterPositions('hello').e, [1]);
// assertArrayEqual(letterPositions('hello').l, [2, 3]);
// assertArrayEqual(letterPositions('hello').o, [4]);

describe('#letterPositions', () => {
  it('should return [2, 3] if \'hello\'', () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
});