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

module.exports = takeUntil;






// assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);