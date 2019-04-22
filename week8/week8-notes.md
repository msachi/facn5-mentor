## Week 8 notes

### Intro to ES6 classes

To export an imported module in a single line:
`export { default as Module } from './Module'`

The ESNext way: `export Module from './Module'`

### React API workshop

NB inside `setState()`, should not rely on the values of `this.props` and `this.state` because they may get updated asynchronously  
-- instead use the second form of `setState` that takes a function with the `state` and `props` arguments

### `this` workshop

Bug in the test file: `Simulate` should be `fireEvent`

### React testing workshop

Bugs:  
-- the initial test (intro/intro.test.js) doesn't run because the test script is set up incorrectly  
-- need to import React for any tests that render components

React testing library queries:  
-- `getBy` returns the first matching node, and throws an error if no elements match  
-- `queryBy` returns the first matching node, and returns null if no elements match
-- this means that you can use `getBy` without assertions (throwing will automatically fail the test), but that's not the case for `queryBy`

`queryByText` expects the exact text, or you can use a regex

`findBy` returns a promise which resolves when a matching element is found  
-- to make this work in Jest, need to `return` (Jest will spot tht you are returning a promise and wait for it to resolve)

`Promise.resolve()` returns a promise that is resolved with a given value  
-- it's equivalent to `new Promise((resolve, reject) => resolve('value'))`

When using `fetch`, can parse data with `response.json()` or `response.text()`  
-- both return a promise so need to be treated as async