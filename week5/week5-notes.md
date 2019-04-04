## Week 5 notes

### TDD Node server

If a tested route doesn't do anything, the request (and so the test) will just hang  
-- to make it fail, need to add `{ timeout: 100 }` as a second argument to `test()`

To read the request body using Node (e.g. from a POST request), need to do it from the data stream (using `on('data')` and `on('end')`)

`t.error(err, msg)`: passes if the error passed to it is falsy (i.e. if there's no error)  
-- otherwise it fails and shows the error's message

The MIME type for JSON should be `application/json`, not `text/json`

In Supertest:  
-- `.send()` and `.set()` methods are used to attach things to the request (body and headers, respectively)  
-- response is tested using `.expect()` (e.g. status code and headers) and within `t.end()`  
-- `res.text` is a string and `res.body` is a parsed object

Modules like Supertest and Shot inject a fake HTTP request/response into your server  
-- used for testing server logic (routers, handlers)  
-- c.f. modules like Nock, which intercept requests from the server and provide a mock response  
-- the latter are used for mocking external APIs (if testing your server) or even for mocking your server (if testing the front-end, with the help of tools like JSDOM)

### Node shell workshop

Bonus task: make your `ls` script display folders in a different colour than files

### Modules workshop

`__dirname` is the directory in which the code you're running lives  
-- it is NOT the root directory  
-- e.g. `__dirname` inside `src/router.js` will be `src`, even if `server.js` (which is the executing script and which imports the router) is in the route directory

### Intro to linters

Can set `eslint` to fix issues automatically on save (by changing VS Code settings)

To set / adjust a rule: use `rules` inside `eslintrc.json`  
-- property name is the name of the rule (e.g. `semi` or `no-console`)  
-- the value is either `off`, `warn` or `error` (a string)  
-- to set additional options, use the array notation (e.g. `["warn", "never"]`)

`eslint` and `prettify` work slightly differently and both have their pros and cons  
-- some people use both in combination  

### Build request module

In order to use Tape to actually test that the two modules (`request` and `myRequest`) return the same thing, need to do some callback magic  
-- either put one module call inside the callback of the other, or use a parallel function  
-- NB cannot use async/await because neither of the two modules returns a promise  

If you do want to use async/await in Tape, still need to use a different version of it (e.g. `tape-async`)

### Projects

With Supertest, can in theory test all routes / endpoints in this project  
-- but: not a great idea to test the ones making requests, as tests shouldn't be dependent on external APIs  
-- instead can use Nock to set up an interception of the request to the external API, and provide a mock response  
-- now the back-end code for the problematic route can be tested: it will make a request to the external API, receive a mock response, and then proceed to respond further to the client (and we can check the content of that response)