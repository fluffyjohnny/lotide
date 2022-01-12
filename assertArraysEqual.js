const assertArrayEqual = function(actual, expected) {
  let str1 = actual.join(', ');
  let str2 = expected.join(', ');
  if (str1 !== str2) {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  } else if (str1 === str2) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// test
assertArrayEqual([1, 2, 3], [3, 4 ,5]);
assertArrayEqual([1, 2, 3], [1, 2 ,3]);