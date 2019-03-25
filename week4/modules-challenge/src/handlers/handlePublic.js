const handleServerError = require('./handleServerError');
const fs = require('fs');
const path = require('path');

module.exports = (res, url) => {
  fs.readFile(path.join(__dirname, '..', '..', url), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      handleServerError(res);
    } else {
      res.writeHead(200, {'content-type': 'text/' + url.split('.')[1]});
      res.end(file);
    }
  });
}