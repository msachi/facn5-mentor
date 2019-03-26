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

### Node shell workshop

Bonus task: make your `ls` script display folders in a different colour than files