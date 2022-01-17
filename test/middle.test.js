const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {
  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return [\'hello\', \'hey\'] for [\'hi\', \'hello\', \'hey\', \'henlo\']', () => {
    assert.deepEqual(middle(['hi', 'hello', 'hey', 'henlo']), ['hello', 'hey']);
  });
  it('should return [\'nihao\'] for [\'hi\', \'hello\', \'nihao\', \'hey\', \'henlo\']', () => {
    assert.deepEqual(middle(['hi', 'hello', 'nihao', 'hey', 'henlo']), ['nihao']);
  });
});
