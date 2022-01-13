const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
};

const assertArrayEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

// -------------------------------------------------------------

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


console.log(letterPositions('hello world'));

// c-style looping
// empty arrays to push


assertArrayEqual(letterPositions('hello').h, [0]);
assertArrayEqual(letterPositions('hello').e, [1]);
assertArrayEqual(letterPositions('hello').l, [2, 3]);
assertArrayEqual(letterPositions('hello').o, [4]);