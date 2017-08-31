const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Promise = require('bluebird');


const pgp = require('pg-promise')(
  {
    promiseLib: Promise
  }
);

// const config = require('./config.js');
// const db = pgp (config);

const db = pgp({
  database: 'florin_site'
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/api/products', (req, resp, next) => {
  db.any('select * from product')
  .then(pages => resp.json(pages))
  .catch(next);
})

app.use((err, req, resp, next) => {
  resp.status(500);
  resp.json({
    error: err.message,
    stack: err.stack.split('\n')
  });
});

app.listen(4444, () => {
  console.log('listening on port 4444');
})