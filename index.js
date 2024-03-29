'use strict';

const express = require('express');

const app = express();

app.use('/vanila-js-css', express.static('vanila-js-css'))
app.use('/', express.static('landing'))

app.get('/test', (req, res) => {
  res.status(200).send('Hello, Angular After Dark');
});

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;