const { server } = require('./survey.js')
const port = process.env.API_PORT || 9123

server.listen(port, () => {
  console.log(`Survey Service listening on http://localhost:${port}`)
})
