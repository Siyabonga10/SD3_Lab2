'use strict' // don't forget this, it won't be shown in future code samples
// Run npm install dolor first
const dolor = require('dolor')
const fs = require('fs')

const fileContents = dolor.paragraphs(100)
fs.writeFile('./GeneratedOutputFile.txt', fileContents, (error) => {
  if (error) throw error
})
