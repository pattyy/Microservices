const express = require('express')
const cors = require('cors')
const moment = require('moment')
const bodyParser = require('body-parser')
const server = express()
const port = 9123 || process.env.API_PORT

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8')
  next()
})

const dataStore = {
  count: 1000
}

server.get('/surveys', (req, res) => {
  const surveyId = req.query.surveyId;
  //const dateRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}/

  //if (!surveyId) {
  //  res.status(400)
  //  res.json({ error: 'surveyId is required' });
  //} else if (!moment(validDate, moment.ISO_8601).isValid()) {
  //  res.status(400)
  //  res.json({ error: `'${surveyId}' is not a valid Id` })
  //} else {
      res.json({
        'surveyId': '1',
        'title': 'Product Satisfaction'
      })
  //  } 
  //}
})

module.exports = {
  server,
  dataStore
}
