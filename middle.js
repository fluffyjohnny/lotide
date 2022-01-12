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

// ----------------------------------------------------------------


const middle = (arr) => {
  let newArr = [];
  if (arr.length !== 1 && arr.length % 2 !== 0) {
    newArr.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length !== 2 && arr.length % 2 === 0) {
    newArr.push(arr[(arr.length / 2) - 1]);
    newArr.push(arr[(arr.length / 2)]);
  }
  return newArr;
};

console.log(middle([1, 2, 3]));
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle(['hi', 'hello', 'hey', 'henlo']), ['hello', 'hey']);
assertArrayEqual(middle(['hi', 'hello', 'nihao', 'hey', 'henlo']), ['nihao']);
console.log(middle([1]));
console.log(middle([1, 2]));