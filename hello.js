'use strict' // don't forget this, it won't be shown in future code samples

const map = function (functionToApply, array) {
  const newArray = []
  array.forEach(function (num) { newArray.push(functionToApply(num)) })
  return newArray
}

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

const squaringFunction = function (number) { return number * number }
const newNumbers = map(squaringFunction, numbers)
console.log(newNumbers)

const newNumbersMap = numbers.map(squaringFunction)
console.log(newNumbersMap)
