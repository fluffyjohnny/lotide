

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




