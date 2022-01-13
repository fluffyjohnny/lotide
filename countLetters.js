const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// ----------------------------------------------------------

const countLetters = (strs) => {
  const noSpace = strs.split(' ').join('');
  const counted = {};
  for (const str of noSpace) {
    if (counted[str]) {
      counted[str] += 1;
    } else {
      counted[str] = 1;
    }
  }
  return counted;
};

const string = 'hahahahHAHAHAH   ffff';

console.log(countLetters('hahahahHAHAHAH   ffff'));
assertEqual(countLetters(string).h, 4);
assertEqual(countLetters(string).H, 4);