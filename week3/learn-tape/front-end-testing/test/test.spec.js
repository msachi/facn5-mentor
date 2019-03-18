const test = require('tape')
const JSDOM = require('jsdom').JSDOM
const fs = require('fs')

const html = fs.readFileSync(__dirname + '/../lib/index.html', 'utf-8')

const DOM = new JSDOM(html)
global.document = DOM.window.document

const frontEndCode = require('../lib/script')

test('test increment function', function(t) {
  let actual = frontEndCode.increment(1)
  let expected = 2
  t.equal(actual, expected, 'should add one to number')

  t.throws(() => frontEndCode.increment('not a number'), /error/)
  actual = document.querySelector('.error').textContent
  expected = 'Error: Argument passed to increment was not a number'
  t.equal(actual, expected, 'should update error node when string passed in')

  t.end()
})

test('test decrement function', function(t) {
  let actual = frontEndCode.decrement(5)
  let expected = 4
  t.equal(actual, expected, 'should subtract one from number')

  t.throws(() => frontEndCode.decrement('not a number'), /error/)
  actual = document.querySelector('.error').textContent
  expected = 'Error: Argument passed to decrement was not a number'
  t.equal(actual, expected, 'should update error node when string passed in')

  t.end()
})

test('test reset function', function(t) {
  let actual = frontEndCode.resetFunc()
  let expected = 0
  t.equal(actual, expected, 'should reset counter')

  t.end()
})

test('test currentCount function', function(t) {
  let actual = frontEndCode.currentCount()
  let expected = '0'
  t.equal(actual, expected, 'should return current count')

  t.end()
})

test('test updateDom function', function(t) {
  frontEndCode.updateDom('10', document.querySelector('.count'))
  let actual = document.querySelector('.count').textContent
  let expected = '10'
  t.equal(actual, expected, 'should update dom')

  t.end()
})

test('increment is called properly when the inc button is clicked', function(t) {
  let count = document.querySelector('.count')
  frontEndCode.updateDom(frontEndCode.resetFunc(), count)

  document.querySelector('.inc').click()
  let actual = count.textContent
  let expected = '1'
  t.equal(actual, expected, 'should increment by 1 when + clicked')

  t.end()
})

test('decrement is called properly when the dec button is clicked', function(t) {
  let count = document.querySelector('.count')
  frontEndCode.updateDom(frontEndCode.resetFunc(), count)

  document.querySelector('.dec').click()
  let actual = count.textContent
  let expected = '-1'
  t.equal(actual, expected, 'should decrement by 1 when - clicked')

  t.end()
})

test('reset is called properly when the reset button is clicked', function(t) {
  document.querySelector('.reset').click()
  let actual = document.querySelector('.count').textContent
  let expected = '0'
  t.equal(actual, expected, 'should reset when reset clicked')

  t.end()
})