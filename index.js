const express = require('express')
const shortId = require('shortid')

const app = express()

const port = 3000
const baseUrl = 'http://localhost:' + port + '/'

const urls = {}

app.get('/shorten', (req, res) => {
  const url = req.query.url
  const id = shortId.generate()

  urls[id] = url;

  res.send(baseUrl + id)
  console.log(baseUrl + id)
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  const url = urls[id]

  if (url) res.redirect(url)
  else res.sendStatus(404)
})

app.listen(port, () => {
  console.log('Server is running on port:', port)
})
