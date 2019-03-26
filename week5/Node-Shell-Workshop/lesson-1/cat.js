#!/usr/bin/env node

const fs = require('fs')
const pathToFile = process.argv[2]

fs.readFile(`${__dirname}/${pathToFile}`, 'utf-8', (err, file) => {
  if(err) console.log(err)
  console.log(file)
})