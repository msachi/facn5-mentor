import jadenCase from './jadenCase'

test('Works for a single word', () => {
  expect(jadenCase('young')).toBe('Young');
});

test('Works for a sentence', () => {
  expect(jadenCase('I’m too young I ain’t did enough')).toBe('I’m Too Young I Ain’t Did Enough');
});