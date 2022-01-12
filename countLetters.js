const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  } else if (JSON.stringify(actual) === JSON.stringify(expected)) {
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
assertEqual(JSON.stringify(countLetters(string)), JSON.stringify({ h: 4, a: 3, H: 4, A: 3, f: 4 }));