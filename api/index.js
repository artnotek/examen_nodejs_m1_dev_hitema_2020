const app = require('./api');
const express = require('express');
const bodyParser = require('body-parser');
const v1 = express.Router();

const APP_PORT = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

app.listen(APP_PORT, () => {
  console.log('Server listening on port:', APP_PORT);
});


v1.get('/message', async (request, response) => {
  const quotes = await messageService.getMessages();
  response.send(quotes);
});
