const map = (arr, func) => {
  let newArr = [];
  for (let element of arr) {
    newArr.push(func(element));
  }
  return newArr;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

// ---------------------------------------------------------

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

// ----------------------------------------------------------

assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);