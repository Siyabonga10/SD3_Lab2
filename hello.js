'use strict' // don't forget this, it won't be shown in future code samples

const toCelcius = function (tempInFarenheit) {
  return (tempInFarenheit - 32) * (5 / 9)
}

console.log(toCelcius(90))
