const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url)

  if (req.url === '/') {
    fs.readFile('../client/index.html', (error, content) =>
      error ? console.log(error) : res.end(content)
    )
  }
})

server.listen(8080)
console.log('Server listening on port 8080')
