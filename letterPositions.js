

const letterPositions = function(sentence) {
  const results = {};
  const noSpace = sentence.split(' ').join('');

  for (let i = 0; i < noSpace.length; i++) {
    if (results[noSpace[i]]) {
      results[noSpace[i]].push(i);
    } else {
      results[noSpace[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;


// console.log(letterPositions('hello world'));

// // c-style looping
// // empty arrays to push


// assertArrayEqual(letterPositions('hello').h, [0]);
// assertArrayEqual(letterPositions('hello').e, [1]);
// assertArrayEqual(letterPositions('hello').l, [2, 3]);
// assertArrayEqual(letterPositions('hello').o, [4]);