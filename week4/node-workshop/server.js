var http = require('http')

var handler = require('./src/handler')

var server = http.createServer(handler)

server.listen(3000, () => console.log("Listenin'!"))