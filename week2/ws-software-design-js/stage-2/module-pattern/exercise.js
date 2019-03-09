/*
 * Exercise: Create some modules!
 *
 * When you think you have finished, run the command:
 *   npm run s2.modules
 * This will run a series of tests which should all pass.
 */
'use strict';

/*
 * Create a single module (using an IIFE) which contains functionality to parse
 * URLs.
 *
 * We have started you off with the basic structure.
 *
 *     https    ://   www.example.com  /   hello  ?  foo=1&bar=2
 * |          |     |                |   |      |  |             |
 * | protocol |     |    domain      |   | path |  | querystring |
 */
var UrlParser = (function () {
  function extractUrlSection(url, n) {
    return url.match(/(http?s):\/\/(.*)\/(.*)\?(.*)/)[n]
  }

  return {
    // a function that takes a URL and returns its protocol
    protocol: function(url) {
      return extractUrlSection(url, 1)
    },
    // a function that takes a URL and returns its domain
    domain: function(url) {
      return extractUrlSection(url, 2)
    },
    // a function that takes a URL and returns its path
    path: function(url) {
      return extractUrlSection(url, 3)
    },
    // a function that takes a URL and returns its query string
    querystring: function(url) {
      return extractUrlSection(url, 4)
    },
  };
})();


/*
 * Create a module that can support multiple instances (like in our example).
 * The module should be a function with several additional methods attached as
 * attributes.
 *
 * Example:
 * var exampleBuilder = createUrlBuilder('https://example.com');
 *
 * var url = exampleBuilder({ query: { foo: 1, bar: 2 }, path: 'hello' });
 *
 * console.log(url); // https://example.com/hello?foo=1&bar=2
 *
 * exampleBuilder.
 */
var createUrlBuilder = function (host) {
  function appendPath(base, path) {
    return base + '/' + path
  }

  function appendQuery(base, query) {
    return base +
      Object.keys(query)
      .reduce(function(acc, curr, i) {
        var pair = curr + '=' + query[curr]
        if(i > 0) acc += '&' + pair
        else acc += pair
        return acc 
      }, '?')
  }

  var builder = function (params) {
    var url = host
    if(params.path) {
      url = appendPath(url, params.path)
    }
    if(params.query) {
      url = appendQuery(url, params.query)
    }
    return url
  }

  builder.path = function(path) {
    return appendPath(host, path)
  }

  builder.query = function(query) {
    return appendQuery(host, query)
  }

  return builder;
};


module.exports = {
  UrlParser,
  createUrlBuilder,
};
