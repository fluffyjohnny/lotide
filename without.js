

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

module.exports = without;

// console.log(without([1, 2, 3, 4, 1,], [1, 2]));
// console.log(assertArrayEqual(without([1, 2, 3, 4, 1,], [1, 2]), [3, 4]));


