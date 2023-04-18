import express, { Request, Response } from 'express';
const shortId = require('shortid')
const cors = require('cors')

const app = express()
const port = 3000

// Interface to define the short URL object
interface ShortUrl {
  id: string;
  url: string;
}

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // CORS middleware

const shortUrls: ShortUrl[] = [];

// Method to create a new short URL
app.post('/shorten', (req: Request, res: Response) => {
  const longUrl: string = req.body.url;
  const id: string = shortId.generate();
  const shortUrl: ShortUrl = { id, url: longUrl };
  shortUrls.push(shortUrl);
  res.json({ shortUrl: `http://localhost:3000/${id}` });
});

// Method to redirect to the long URL
app.get('/:id', (req: Request, res: Response) => {
  const id: string = req.params.id;
  const shortUrl: ShortUrl | undefined = shortUrls.find(shortUrl => shortUrl.id === id);
  if (shortUrl) {
    res.redirect(shortUrl.url);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
