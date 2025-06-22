const express = require('express')

const server = express()

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

const PORT = 4000
server.listen(PORT, () => {
  console.log('Listening on:', PORT)
})