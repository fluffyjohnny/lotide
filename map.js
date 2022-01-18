const map = (arr, func) => {
  let newArr = [];
  for (let element of arr) {
    newArr.push(func(element));
  }
  return newArr;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);