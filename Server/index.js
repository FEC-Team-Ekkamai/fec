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
  headers: {'Authorization': api.TOKEN}
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
    headers: {Authorization: api.TOKEN},
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

app.get('/api/reviews/meta', (req, res) => {
  var id = req.query.product_id;
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`,
    headers: {Authorization: api.TOKEN},
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

app.put(`/api/reviews/:review_id/helpful`, (req, res) => {
  var reviewId = req.params.review_id;

  const options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`,
    headers: {Authorization: api.TOKEN},
    params: {review_id: reviewId}
  }
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
})

app.put(`/api/reviews/:review_id/report`, (req, res) => {
  var reviewId = req.params.review_id;

  const options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/report`,
    headers: {Authorization: api.TOKEN},
    params: {review_id: reviewId}
  }
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
})

/**
 * These are the routes for Questions and Answers APIs
 */

const port = 3000;

app.listen(port, () => {
  console.log('You are listening on Port: 3000')
})