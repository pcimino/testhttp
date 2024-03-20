const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Dynamically import node-fetch
let fetch;

import('node-fetch').then(mod => {
    fetch = mod.default;
});

// Route for testit function
app.get('/testit', async (req, res) => {
  if (!fetch) {
    return res.status(500).send({ error: 'Fetch is not initialized' });
  }
  try {
    const response = await fetch('https://www.google.com/search?q=cow');
    console.log(response); // Log the full response
    res.send({ statusCode: response.status }); // Send back the status code
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
