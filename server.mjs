import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/testit', async (req, res) => {
  try {
    const response = await fetch('https://www.google.com/search?q=cow');
    console.log(response);
    res.send({ statusCode: response.status });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
