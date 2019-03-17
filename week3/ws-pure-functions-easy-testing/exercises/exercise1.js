// leave me alone :) :) :) <3 <3 <3
var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3

// Refactor the following functions into pure functions:

var addOne = function (n) {
  return n+1;
};


var timesTwo = function (n) {
  return n*2;
};


var incrementArray = function (array) {
  return array.map(function(x) {
    return x+1;
  })
}

var addNumberArray = function (array, number) {
  return array.concat(number);
};

var incrementObject = function (object) {
  return Object.keys(object).reduce(function(acc, curr) {
    acc[curr] = object[curr] + 1;
    return acc;
  }, {});
};

module.exports = {
  addOne,
  timesTwo,
  incrementArray,
  addNumberArray,
  incrementObject,
  constantNumber,
  constantArray,
  constantObject
}
