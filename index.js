const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true)
  const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g, '')

  const method = req.method.toLowerCase()

  const query = parsedUrl.query

  console.log(`Going to respond with query`, query)
  
  res.end(`hit ${trimmedPath} by ${method} method\n`)
})

server.listen(3001, () => {
  console.log('Server initialized!')
})