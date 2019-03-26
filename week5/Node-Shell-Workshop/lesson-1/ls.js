#!/usr/bin/env node

const fs = require('fs')

fs.readdir(process.cwd(), (err, files) => {
  if(err) console.log(err)
  let fileList = files
  if(process.argv[2] === '-ex') {
    let extension = process.argv[3]
    fileList = fileList.filter(f => f.split('.')[1] === extension)
  }
  let fileString = fileList.reduce((acc, curr) => {
    if(fs.lstatSync(curr).isDirectory()) {
      acc += '\033[1m' + '\033[31m' + curr + '\033[0m' + '\t'
    } else {
      acc += `${curr}\t`
    }
    return acc
  }, '')
  console.log(fileString)
})