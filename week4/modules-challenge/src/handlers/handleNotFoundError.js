module.exports = (res) => {
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('404 not found error');
}