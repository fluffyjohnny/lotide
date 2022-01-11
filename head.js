let head = function(array) {
  if (!array) {
    return 'undefined';
  } else {
    return array[0];
  }
};

// test code
console.log(head([1, 2, 3]));
console.log(head([ ]));
