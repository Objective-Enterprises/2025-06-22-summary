const express = require('express')

const server = express()

const staticMiddleware = express.static('public')
server.use(staticMiddleware)

server.get('/', (request, response) => {
  response.send(`<html>
    <head>
      <title>My Movie Website</title>
      <style>
        h1 {
          color: red;
        }
      </style>
      <script>
        const heading = document.getElementById('title')
        heading.addEventListener('click', () => {
          console.log('test')
        })
      </script>
    </head>
    <body>
      <div>
        <h1 id='title'>My Movie Website</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Stars</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Twilight Zone (1985)</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Logan's Run</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  </html>`)
})

server.get('/logans', (request, response) => {
  response.send(`<div>
    <h1>Logan's Run</h1>
    <p>Very good if you like campy sci-fi</p>
  </div>`)
})

const reviews = {
  twilight: 'Honestly, the TV show is way better!',
  logans: 'Very good, if you like campy sci-fi...'
}

// Server Side Rendering (SSR)
server.get('/reviews/:movie', (request, response) => {
  const html = `
    <h1>Your review is:</h1>
    <p>${reviews[request.params.movie]}</p>
  `
  response.send(html)
})

const PORT = 4000
server.listen(PORT, () => {
  console.log('Listening on:', PORT)
})