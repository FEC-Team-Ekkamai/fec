const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// : 'token ghp...'
const token = {Authorization:'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'};
/**
 * These are the routes for Product APIs
 */

const options = {
                method: 'get',
                url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
                headers: token
                }
                
app.get('/api/products', (req, res) => {
  axios(options)
   .then((response) => {
     res.send(response.data);
   })
   .catch((error) => {
     console.log(error);
     res.sendStatus(500);
   })
})

app.post('/api/products', (req, res) => {
  console.log('you got a post');
  res.sendStatus(200);
})


/**
 * These are the routes for Reviews APIs
 */

/**
 * These are the routes for Questions and Answers APIs
 */

const port = 3000;

app.listen(port, () => {
  console.log('You are listening on Port: 3000')
})