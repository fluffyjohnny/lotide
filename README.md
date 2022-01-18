# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

```javascript
npm install @john.chia/lotide
```

**Require it:**

```javascript
const _ = require('@john.chia/lotide');
```

**Call it:**

```javascript
const results = _.tail([1, 2, 3]) // => [2, 3]
```

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Takes in a string and returns an object of each letter's count(s).

* `countOnly(array, object)`: Returns an object containing counts of everything that the input object listed.

* `eqArrays(array1, array2)`: Takes in two arrays and returns **_true_** or **_false_**, based on a perfect match.

* `eqObjects(object1, object2)`: Takes in two objects and returns **_true_** or **_false_**, based on a perfect match.

* `findKey(object, function)`: Returns the first key for which the callback function returns a truthy value from the object.

* `findKeyByValue(object, key value)`: Returns the Key of given key-value in respective object.

* `flatten(array)`: Returns a new array with one level of nested array flattened.

* `head(array)`: Gets the first element of array.

* `letterPositions(string)`: Takes in a string and returns an object of each letter's position(s).

* `map(array, function)`: Returns a new array based on the results of the callback function.

* `middle(array)`: Gets the middle index value of an array. 
  * If array has only **_one_** or **_two_** elements, returns an empty string. 
  * If array has an **_odd_** number of elements, returns single middle element.
  * If array has an **_even_** number of elements, returns center two elements.

* `sumToOne(number)`: Returns a sum of number to 1.

* `tail(array)`: Gets all but the first element of array.

* `takeUntil(array, function)`: Returns a new array that keeps collecting from the original array till the callback function returns a truthy value.

* `without(array1, array2)`: Creates a new array from array1, filtering out values from array2. 