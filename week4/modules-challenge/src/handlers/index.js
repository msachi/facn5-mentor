const handlePublic = require('./handlePublic');
const handleRepoApi = require('./handleRepoApi');
const handleServerError = require('./handleServerError');
const handleNotFoundError = require('./handleNotFoundError');

module.exports = {
  handlePublic,
  handleRepoApi,
  handleServerError,
  handleNotFoundError
}