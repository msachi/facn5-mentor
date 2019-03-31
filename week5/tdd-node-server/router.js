const router = (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('Hello')
  } else if (req.url === '/blog' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(['one', 'two', 'three']))
  } else if (req.url === '/blog' && req.method === 'POST') {
    if (req.headers.password !== 'potato') {
      res.writeHead(403)
      res.end('Forbidden')
      return
    }
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      if (!data) {
        res.writeHead(302, { Location: '/blog' })
        res.end()
        return
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(data)
    })
  } else {
    res.writeHead(404)
    res.end('Unknown URI')
  }
}

module.exports = router
