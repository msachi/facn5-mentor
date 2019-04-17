import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from 'react-testing-library'
import Toggle from './toggle'
afterEach(cleanup)

// test('The Toggle reveals children when clicked', () => {
//   const root = document.createElement('div')
//   ReactDOM.render(<Toggle><h1>Hello!</h1></Toggle>, root)
//   document.body.appendChild(root)
//   expect(document.querySelector('h1')).toBeFalsy()
//   const button = document.querySelector('button')
//   button.click()
//   expect(document.querySelector('h1')).toBeTruthy()
// })

test('The Toggle reveals children when clicked', () => {
  const { queryByText } = render(<Toggle><h1>Hello!</h1></Toggle>)
  expect(queryByText('Hello!')).toBeFalsy()
  const button = queryByText('Show')
  button.click()
  expect(queryByText('Hello!')).toBeTruthy()
})