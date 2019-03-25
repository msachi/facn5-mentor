const handlers = require('./handlers')

const router = (req, res) => {
  const url = req.url;

  console.log('URL: ', url);

  if (url === '/' || url === '/fac') {
    handlers.handlePublic(res, '/public/fac.html');
  } else if (url === '/dwyl') {
    handlers.handlePublic(res, '/public/dwyl.html');
  } else if (url.includes('/public')) {
    handlers.handlePublic(res, url);
  } else if (url === '/api/repos/fac') {
    handlers.handleRepoApi(res, 'fac');
  } else if (url === '/api/repos/dwyl') {
    handlers.handleRepoApi(res, 'dwyl');
  } else {
    handlers.handleNotFoundError(res);
  }
}

module.exports = router;