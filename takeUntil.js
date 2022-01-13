const takeUntil = function(array, callback) {
  let newArr = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    newArr.push(element);
  }
  return newArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


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

assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);