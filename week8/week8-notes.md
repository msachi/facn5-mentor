## Week 8 notes

### React API workshop

NB inside `setState()`, should not rely on the values of `this.props` and `this.state` because they may get updated asynchronously  
-- instead use the second form of `setState` that takes a function with the `state` and `props` arguments

### React testing workshop

Bugs:  
-- the initial test (intro/intro.test.js) doesn't run because the test script is set up incorrectly  
-- need to import React for any tests that render components

React testing library queries:  
-- `getBy` returns the first matching node, and throws an error if no elements match  
-- `queryBy` returns the first matching node, and returns null if no elements match
-- this means that you can use `getBy` without assertions (throwing will automatically fail the test), but that's not the case for `queryBy`

`queryByText` expects the exact text, or you can use a regex