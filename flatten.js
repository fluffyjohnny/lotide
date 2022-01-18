

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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5]));
// assertArrayEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
// // destructuring assignment