var fs = require('fs')
var querystring = require('querystring')

var handler = (request, response) => {
  var endpoint = request.url

  if(endpoint === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile(__dirname + '/../public/index.html', (error, file) => {
      if(error) {
        console.log(error)
        return
      }
      response.end(file)
    })
    return
  }

  if(endpoint.includes('/public')) {
    var extension = endpoint.split('.')[1]
    response.writeHead(200, {'Content-Type': 'text' + extension})
    fs.readFile(__dirname + '/..' + endpoint, (error, file) => {
      if(error) {
        console.log(error)
        return
      }
      response.end(file)
    })
    return
  }

  if(endpoint === '/create-post') {
    response.writeHead(302, {Location: "/"})
    let data = ''
    request.on('data', (chunk) => {
      data += chunk
    })
    request.on('end', () => {
      let parsedData = querystring.parse(data)
      response.end()
    })
    return
  }

  response.writeHead(200, {'Content-Type': 'text/html'})
  if(endpoint === '/cute-hedgehog') {
    response.write(':O')
  } else {
    response.write(`Hello! You came to section ${endpoint}`)
  }
  response.end()
}

module.exports = handler