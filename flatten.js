

const flatten = (arr) => {
  let flattened = [];
  if (arr.length !== 0) {
    for (const element of arr) {
      if (Array.isArray(element)) {
        flattened.push(...element);
      } else {
        flattened.push(element);
      }
    }
    return flattened;
  }
  return;
};

module.exports = flatten;

console.log(flatten([]));