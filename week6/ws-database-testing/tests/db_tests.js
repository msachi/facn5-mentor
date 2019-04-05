const tape = require("tape")
const runDbBuild = require("../src/database/db_build")
const getData = require("../src/queries/getData")
const postData = require("../src/queries/postData")

tape("tape is working", t => {
  t.equals(1, 1, "one equals one")
  t.end()
})

tape('getData', (t)=> {
  runDbBuild((err, res) => {
    t.error(err, 'No errors in building database')
    getData((err, res) => {
      t.error(err, 'No errors in getting data')
      t.deepEquals(res, [
        { id: 1, name: 'Alina', location: 'Moscow' }
      ],
      'getData returns expected data')
      t.end()
    })
  })
})

tape('postData', (t)=> {
  runDbBuild((err, res) => {
    t.error(err, 'No errors in building database')
    postData('Marko', 'Nazareth', (err, res) => {
      t.error(err, 'No errors in inserting data')
      getData((err, res) => {
        t.error(err, 'No errors in getting data')
        t.deepEquals(res, [
          { id: 1, name: 'Alina', location: 'Moscow' },
          { id: 2, name: 'Marko', location: 'Nazareth' }
        ],
        'postData inserts expected data')
        t.end()
      })
    })
  })
})