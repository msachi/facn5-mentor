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

  if(endpoint === '/create/post') {
    let data = ''
    request.on('data', (chunk) => {
      data += chunk
    })
    request.on('end', () => {
      let newPost = querystring.parse(data)
      fs.readFile(__dirname + '/posts.json', (error, file) => {
        if(error) {
          console.log(error)
          return
        }
        let blogposts = JSON.parse(file)
        let currentTime = Date.now()
        blogposts[currentTime] = newPost.post

        fs.writeFile(__dirname + '/posts.json', JSON.stringify(blogposts, null, 4), function (error) {
          if (error) {
            console.log(error)
          }
          response.writeHead(302, {"Location" : "/"})
          response.end()
        })
      })
    })
    return
  }

  if(endpoint === '/posts') {
    response.writeHead(200, {'Content-Type': 'application/json'})
    fs.readFile(__dirname + '/posts.json', (error, file) => {
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
    response.writeHead(200, {'Content-Type': 'text/' + extension})
    fs.readFile(__dirname + '/..' + endpoint, (error, file) => {
      if(error) {
        console.log(error)
        return
      }
      response.end(file)
    })
    return
  }
}

module.exports = handler