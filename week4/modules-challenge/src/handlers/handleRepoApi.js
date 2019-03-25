const repos = require('../repos.json');

module.exports = (res, repo) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(repos[repo]));
}