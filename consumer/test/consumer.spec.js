const chai = require('chai')
const nock = require('nock')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
const API_PORT = process.env.API_PORT || 9123
chai.use(chaiAsPromised)

// Configure and import consumer API
// Note that we update the API endpoint to point at the Mock Service
const API_HOST = `http://localhost:${API_PORT}`

describe('Consumer', () => {
  describe('when a call to the Survey service is made', () => {
    const { fetchProviderData } = require('../client')

    it('can process the JSON payload from the survey service', () => {
      nock(API_HOST)
        .get('/surveys')
        //.query({ surveyId: 1 })
        .reply(200, {
          id: '1',
          title: 'Product Satisfaction'
        })

      const response = fetchProviderData(new Date().toISOString())

      console.log('surveys service response got in test %s', response.count);

      return expect(response).to.eventually.have.property('title', 'Product Satisfaction')
    })
  })
})
