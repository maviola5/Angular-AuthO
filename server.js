'use strict'

// Load dependencies

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://maviola.auth0.com/.well-known/jwks.json"
  }),
  audience: 'daily-deals-api',
  issuer: "https://maviola.auth0.com/",
  algorithms: ['RS256']
})


app.get('/api/deals/public', (req, res) => {
  let deals = [
    {
      id: 1234,
      name: 'Name of Product',
      description: 'Description of Product',
      originalPrice: 19.99, // Original price of product
      salePrice: 9.99 // Sale price of product
    },
    {
      id: 1234,
      name: 'Name of Product',
      description: 'Description of Product',
      originalPrice: 19.99, // Original price of product
      salePrice: 9.99 // Sale price of product
    },
    {
      id: 1234,
      name: 'Name of Product',
      description: 'Description of Product',
      originalPrice: 19.99, // Original price of product
      salePrice: 9.99 // Sale price of product
    }
  ];

  res.json(deals);
})

app.get('/api/deals/private', authCheck, (req, res) => {
  let deals = [
    {
      id: 1234,
      name: 'Name of Product',
      description: 'Description of Product',
      originalPrice: 19.99, // Original price of product
      salePrice: 0.99 // Sale price of product
    },
    {
      id: 1234,
      name: 'Name of Product',
      description: 'Description of Product',
      originalPrice: 19.99, // Original price of product
      salePrice: 0.99 // Sale price of product
    },
    {
      id: 1234,
      name: 'Name of Product',
      description: 'Description of Product',
      originalPrice: 19.99, // Original price of product
      salePrice: 0.99 // Sale price of product
    }
  ];

  res.json(deals);
})

app.listen(3001);

console.log('Serving deals on localhost:3001');

