"use strict"

const myRequest = (url, cb) => {
  const http = require('http')
    http.get(url, (res) => {
      res.setEncoding('utf8')
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        return cb(null, res, data)
      })
    }).on('error', (e) => {
      return cb(e)
    })
}

module.exports = myRequest