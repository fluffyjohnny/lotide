const assertEqual = require('../assertEqual');
const head = require('../head');

// test code
assertEqual(head([1, 2, 3]), 1);
assertEqual(head([ ]), undefined);