const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config.js')
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/**
 * These are the routes for Product APIs
 */

const options = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
  headers: {Authorization: api.TOKEN}
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
 app.get('/api/reviews', (req, res) => {
  var id = req.query.product_id;
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
    headers: token,
    params: {product_id: id}
    }
  axios(options)
   .then((response) => {
     res.send(response.data);
   })
   .catch((error) => {
     console.log(error);
     res.sendStatus(500);
   })
})

/**
 * These are the routes for Questions and Answers APIs
 */
 app.get('/api/products/questions', (req, res) => {
  let questionOptions = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${req.query.product_id}`,
    headers: { Authorization: api.TOKEN }
  };
  axios(questionOptions)
    .then(questions => {
      res.send(questions.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});


const port = 3000;

app.listen(port, () => {
  console.log('You are listening on Port: 3000')
})