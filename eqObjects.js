const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
};

// ---------------------------------------------------------

const eqObjects = function(object1, object2) {
  const amtOfkeys1 = Object.keys(object1);
  const amtOfkeys2 = Object.keys(object2);

  if (amtOfkeys1.length === amtOfkeys2.length) {
    for (const key of amtOfkeys1) {
      if (amtOfkeys1[key] === amtOfkeys2[key]) {
        return true;
      }
    }
  }
  return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false);