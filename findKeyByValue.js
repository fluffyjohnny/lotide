

const findKeyByValue = (variables, show) => {

  for (const variable in variables) {
    if (variables[variable] === show) {
      return variable;
    }
  }
};

module.exports = findKeyByValue;

