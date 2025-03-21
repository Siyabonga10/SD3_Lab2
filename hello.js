'use strict' // don't forget this, it won't be shown in future code samples

const numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19) // puts 19 at the end of the array
numbers.unshift(61) // puts 61 at the start of the list
numbers[1] = 12 // Changes the value at index 1, ie 76 becomes 12
numbers.splice(3, 1, 99) // Goes to index 3, and replaces 1 element, starting at index 3, with the value 99
console.log(numbers) // 61, 12, 55.7, 99, 37.5, 61, 19
console.log(numbers[7]) // undefined
