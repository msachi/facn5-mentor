import React from 'react'
import { render, fireEvent, cleanup, getNodeText } from 'react-testing-library'
import Jadenizer from './jadenizer'
afterEach(cleanup)

test('Jadenizes correctly', () => {
  const { queryByText, queryByLabelText, getByText, queryByTestId } = render(<Jadenizer />)
  expect(queryByText('Enter text for Jadenization')).toBeTruthy()
  const input = queryByLabelText('Enter text for Jadenization')
  fireEvent.change(input, { target: { value: "I’m too young I ain’t did enough" } })
  const button = getByText("Jadenize")
  fireEvent.click(button)
  const output = queryByTestId('output')
  expect(getNodeText(output)).toBe('I’m Too Young I Ain’t Did Enough')
})