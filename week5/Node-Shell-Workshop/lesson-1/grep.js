#!/usr/bin/env node

const fs = require('fs')
const matcher = process.argv[2]
const pathToFile = process.argv[3]

fs.readFile(`${__dirname}/${pathToFile}`, 'utf-8', (err, file) => {
  if(err) console.log(err)
  let stringToPrint = file
    .split('\n')
    .filter(l => l.includes(matcher))
    .join('\n')
  console.log(stringToPrint)
})