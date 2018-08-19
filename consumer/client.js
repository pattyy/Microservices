const request = require('superagent')
const API_HOST = process.env.API_HOST || 'http://localhost'
const API_PORT = process.env.API_PORT || 9123
const moment = require('moment')
const API_ENDPOINT = `${API_HOST}:${API_PORT}`

// Fetch provider data
const fetchProviderData = (submissionDate) => {
  let withDate = {}
  //const dateRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}/

  //if (submissionDate) {
    withDate = { validDate: submissionDate }
  //}

  console.log('API EndPoint %s', API_ENDPOINT);

  return request
    .get(`${API_ENDPOINT}/surveys`)
    //.query(withDate)
    .then((res) => {
      console.log('Request to surveys API completed. Title: %s', res.body.title);
      //if (res.body.validDate.match(dateRegex)) {
        return {
          title: res.body.title
        }
      //} else {
      //  throw new Error('Invalid date format in response')
      //}
    }
    //, (err) => {
    //  throw new Error(`Error on client: ${err.body}`)
    //}
  )
}

module.exports = {
  fetchProviderData
}
