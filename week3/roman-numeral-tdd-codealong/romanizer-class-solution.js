// function romanizer(num) {
//   if(num > 0) {
//     return 'I'.repeat(num)
//   }
//   return 'The Romans had no representation for less than 1'
// }

// function romanizer(num) {
//   if(num === 4) {
//     return 'IV'
//   }
//   if(num > 0) {
//     return 'I'.repeat(num)
//   }
//   return 'The Romans had no representation for less than 1'
// }

// function romanizer(num) {
//   if(num<1) {
//     return 'The Romans had no representation for less than 1'
//   }
//   let answer = ''
//   if(num >= 5) {
//     answer = 'V'
//     num -= 5
//   }
//   if(num === 4) {
//     return 'IV'
//   }
//   return answer + 'I'.repeat(num)
// }

// function romanizer(num) {
//   if(num<1) {
//     return 'The Romans had no representation for less than 1'
//   }
//   let answer = ''
//   if(num >= 10) {
//     answer = 'X'
//     num -= 10
//   }
//   if(num === 9) {
//     return 'IX'
//   }
//   if(num >= 5) {
//     answer = 'V'
//     num -= 5
//   }
//   if(num === 4) {
//     return 'IV'
//   }
//   return answer + 'I'.repeat(num)
// }

// function romanizer(num) {
//   if(num<1) {
//     return 'The Romans had no representation for less than 1'
//   }
//   let answer = ''
//   while(num >= 50) {
//     answer += 'L'
//     num -= 50
//   }
//   while(num >= 40) {
//     answer += 'XL'
//     num -= 40
//   }
//   while(num >= 10) {
//     answer += 'X'
//     num -= 10
//   }
//   while(num >= 9) {
//     answer += 'IX'
//     num -= 9
//   }
//   while(num >= 5) {
//     answer += 'V'
//     num -= 5
//   }
//   while(num >= 4) {
//     answer += 'IV'
//     num -= 4
//   }
//   return answer + 'I'.repeat(num)
// }

function romanizer(num) {
  if(num<1) {
    return 'The Romans had no representation for less than 1'
  }
  if(num>4999) {
    return "There's no easy way to represent numbers over 4999 in Roman numerals, sorry!"
  }
  let answer = ''
  let romanValues = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  Object.entries(romanValues)
    .forEach(function(entry) {
      while(num >= entry[1]) {
        answer += entry[0]
        num -= entry[1]
      }
    })
  return answer
}

if (typeof module !== 'undefined') {
  module.exports = romanizer;
}