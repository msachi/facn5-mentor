function romanizer(num) {
  if(num === 0) {
    return 'The Romans had no representation for less than 1'
  }
  if(num >= 5000) {
    return 'There\'s no easy way to represent numbers over 4999 in Roman numerals, sorry!'
  }
  let thousands = num / 1000
  let fivehundreds = (num % 1000) / 500
  let hundreds = (num % 500) / 100
  let fifties = (num % 100) / 50
  let tens = (num % 50) / 10
  let fives = (num % 10) / 5
  let ones = num % 5
  let result =
    'M'.repeat(thousands)
    + 'D'.repeat(fivehundreds)
    + 'C'.repeat(hundreds)
    + 'L'.repeat(fifties) 
    + 'X'.repeat(tens)
    + 'V'.repeat(fives)
    + 'I'.repeat(ones)
  return result
    .replace('DCCCC', 'CM')
    .replace('CCCC', 'CD')
    .replace('LXXXX', 'XC')
    .replace('XXXX', 'XL')
    .replace('VIIII', 'IX')
    .replace('IIII', 'IV')
}

if (typeof module !== 'undefined') {
  module.exports = romanizer;
}