const test = require('tape')
const supertest = require('supertest')
const router = require('./router')

test('Initialise', (t) => {
  t.pass('Should pass')
  t.end()
})

test('Home route returns a status code of 200', { timeout: 100 }, (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err, 'No errors in Supertest')
      t.equal(res.text, 'Hello', 'Response should contain "Hello"')
      t.end()
    })
})

test('Unknown URI returns a status code of 404', { timeout: 100 }, (t) => {
  supertest(router)
    .get('/elephants')
    .expect(404)
    .end((err, res) => {
      t.error(err, 'No errors in Supertest')
      t.equal(res.text, 'Unknown URI')
      t.end()
    })
})

test('/blog GET route returns a list of blogs', { timeout: 100 }, (t) => {
  supertest(router)
    .get('/blog')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No errors in Supertest')
      t.deepEqual(res.body, ['one', 'two', 'three'], 'Returns correct array')
      t.end()
    })
})

test('/blog POST route should succeed if password provided', { timeout: 100 }, (t) => {
  supertest(router)
    .post('/blog')
    .send(JSON.stringify(['a', 'b']))
    .set('password', 'potato')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No errors in Supertest')
      t.deepEqual(res.body, ['a', 'b'], 'Returns posted blogs')
      t.end()
    })
})

test('/blog POST route should fail if password not provided', { timeout: 100 }, (t) => {
  supertest(router)
    .post('/blog')
    .expect(403)
    .end((err, res) => {
      t.error(err, 'No errors in Supertest')
      t.equal(res.text, 'Forbidden', 'Request forbidden')
      t.end()
    })
})

test('/blog POST route should redirect if no body content provided', { timeout: 100 }, (t) => {
  supertest(router)
    .post('/blog')
    .set('password', 'potato')
    .expect(302)
    .end((err, res) => {
      t.error(err, 'No errors in Supertest')
      t.equal(res.headers.location, '/blog')
      t.end()
    })
})
