const express = require('express')

const server = express()

server.set('views', 'views')
server.set('view engine', 'ejs')

const staticMiddleware = express.static('public')
server.use(staticMiddleware)

server.get('/', (request, response) => {
  response.render('index')
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
  response.render('review', {
    title: request.params.movie,
    review: reviews[request.params.movie]
  })
})

const PORT = 4000
server.listen(PORT, () => {
  console.log('Listening on:', PORT)
})