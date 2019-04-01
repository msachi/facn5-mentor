const test = require('tape')
const request = require('request')
const myRequest = require('./app')

const requestHelper = (t, url) => {
  let state = {}
  request(url, function (error, response, body) {
    state.requestData = {
      error,
      statusCode: response && response.statusCode,
      body
    }
    myRequest(url, function (error, response, body) {
      state.myRequestData = {
        error,
        statusCode: response && response.statusCode,
        body
      }
      t.deepEqual(state.requestData, state.myRequestData)
      t.end()
    })
  })
}

test('Successful request', (t) => {
  requestHelper(t, 'http://jsonplaceholder.typicode.com/users/1')
})

test('404 request', async (t) => {
  requestHelper(t, 'http://jsonplaceholder.typicode.com/users/aba')
})

test('Faulty request', async (t) => {
  requestHelper(t, 'http://jsonplaceholder.typicode')
})