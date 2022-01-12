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

const without = (wantedArr, unwantedArr) => {
  let newArr = [];
  for (let i = 0; i < wantedArr.length; i++) {
    let seen = false;
    for (let j = 0; j < unwantedArr.length; j++) {
      if (wantedArr[i] === unwantedArr[j]) {
        seen = true;
        break;
      }
    }
    if (!seen) {
      newArr.push(wantedArr[i]);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3, 4, 1,], [1, 2]));
console.log(assertArrayEqual(without([1, 2, 3, 4, 1,], [1, 2]), [3, 4]));


