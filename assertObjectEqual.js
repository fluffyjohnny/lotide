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

// ------------------------------------------------------------

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


console.log(assertObjectsEqual({ 1: 1, 2: 2, 3: 3}, {1: 1, 2: 2, 3: 3}));