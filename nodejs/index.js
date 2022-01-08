const calculate = require('./calculate.js')
// const {sum, minus} = require('./calculate.js')

console.log(calculate.sum(18, 12), calculate.minus(18, 12))
// console.log(sum(18, 12), minus(18, 12))

const fs = require('fs')

fs.readFile('./clients.json', (error, content) =>
  error ? console.log(error) : console.log(JSON.parse(content))
)
