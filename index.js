const express = require('express')
const cors = require('cors')
const shortId = require('shortid')

const app = express()

const port = 3000
const baseUrl = 'http://localhost:' + port + '/'

const urls = {}

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // CORS middleware

app.post('/shorten', (req, res) => {
  const url = req.body.url;
  const id = shortId.generate();

  // Validating URL
  if (!url || !url.startsWith('http')) {
    // Thwowing error if URL is invalid
    return res.status(400).send({ error: 'Invalid URL' });
  }

  urls[id] = url;

  res.send({ shortUrl: baseUrl + id }); // Sending response as JSON
});

app.get('/:id', (req, res) => {
  const id = req.params.id
  const url = urls[id]

  if (url) res.redirect(url)
  else res.sendStatus(404)
})

app.listen(port, () => {
  console.log('Server is running on port:', port)
})
