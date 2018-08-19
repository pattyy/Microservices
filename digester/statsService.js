const { server } = require('./stats.js')
const port = process.env.API_PORT || 9124

server.listen(port, () => {
  console.log(`Stats Service listening on http://localhost:${port}`)
})
