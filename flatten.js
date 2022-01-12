const assertArrayEqual = function(actual, expected) {
  let str1 = actual.join(', ');
  let str2 = expected.join(', ');
  if (str1 !== str2) {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  } else if (str1 === str2) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// --------

// .isArray()

const flatten = (arr) => {
  let flattened = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5]));
assertArrayEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
// destructuring assignment