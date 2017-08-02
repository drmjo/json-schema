const express = require('express')
const Ajv = require('ajv')
const colors = require('colors')
const log = console.log
const url = require('url')

const ajv = new Ajv()
const app = express()
//
// var data = {
//   id: 122,
//   text: "hi"
// }

app.get('/', (req, res) => {
//  log(encodeURIComponent(JSON.stringify(data)))
  query = url.parse(req.url).query
  // try {
  //     var query = JSON.parse(queryString)
  // } catch (e) {
  //   log(`${e}`.red)
  // }

  if ('die' === query) {
    res.send("will die now")
    process.exit(0)
  }

  res.send("Hola")
})
// app.get('/private/sproc/:sproc', (req, res) => {
//   log(`sproc: ${req.params.sproc}`.green)
// //  log(encodeURIComponent(JSON.stringify(data)))
//   var queryRaw = url.parse(req.url).query
//   var queryString = decodeURIComponent(queryRaw)
//
//   try {
//       var query = JSON.parse(queryString)
//   } catch (e) {
//     log(`${e}`.red)
//   }
//
//   log(query)
//   res.send(JSON.stringify(query, null, 2))
// })

app.listen(process.env.NODE_HTTP_PORT)
