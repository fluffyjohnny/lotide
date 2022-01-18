

const findKeyByValue = (variables, show) => {

  for (const variable in variables) {
    if (variables[variable] === show) {
      return variable;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   // eslint-disable-next-line camelcase
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);