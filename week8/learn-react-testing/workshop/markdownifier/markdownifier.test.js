import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Markdownifier from './markdownifier'

const mockResponse = `<h3 id="test">Test</h3>`
global.fetch = jest
  .fn()
  .mockImplementation(() => new Promise((resolve, reject) => {
    resolve({ text: () => new Promise((resolve, reject) => {
      resolve(mockResponse)
    }) })
  }))

afterEach(cleanup)

test('Markdownifies correctly', () => {
  const { queryByLabelText, getByText, findByTestId } = render(<Markdownifier />)
  const input = queryByLabelText('Enter markdown')
  fireEvent.change(input, { target: { value: "### Test" } })
  const button = getByText("Markdownify")
  fireEvent.click(button)
  expect(global.fetch).toHaveBeenCalledTimes(1)
  return findByTestId('output')
    .then(output =>
      expect(output.innerHTML).toEqual(mockResponse)
    )
})