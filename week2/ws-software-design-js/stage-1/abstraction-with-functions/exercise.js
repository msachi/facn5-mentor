/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * The command
 *   npm run s1.functions
 * will run tests to ensure the functions do what they should. They should all
 * still pass when you've finished refactoring.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */
'use strict';

function capitalise (str) {
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function increment (value) {
  return value + 1;
}

function reverse (str) {
  return str.split('').reverse().join('');
}

function capitaliseObjectKeys (input) {
  return Object.keys(input).reduce(function(acc, curr) {
    acc[capitalise(curr)] = input[curr];
    return acc;
  }, {})
}

function capitaliseObjectValues (input) {
  return Object.keys(input).reduce(function(acc, curr) {
    acc[curr] = capitalise(input[curr]);
    return acc;
  }, {})
}

function incrementObjectValues (input) {
  return Object.keys(input).reduce(function(acc, curr) {
    acc[curr] = increment(input[curr]);
    return acc;
  }, {})
}

function reverseObjectKeys (input) {
  return Object.keys(input).reduce(function(acc, curr) {
    acc[reverse(curr)] = input[curr];
    return acc;
  }, {})
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
