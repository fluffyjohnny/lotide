

const sumToOne = (n) => {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
};

module.exports = sumToOne;