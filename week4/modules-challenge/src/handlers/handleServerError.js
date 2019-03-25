module.exports = (res) => {
  res.writeHead(500, {'content-type': 'text/plain'});
  res.end('server error');
}