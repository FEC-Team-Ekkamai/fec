const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const token =require('./token');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/**
 * These are the routes for Product APIs
 */
app.get('/api/products', (req, res) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
    headers: token
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

app.post('/api/products/id', (req, res) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.body.product}`,
    headers: token
    }
  axios(options)
   .then((response) => {
     console.log(response.data)
     res.send(response.data);
   })
   .catch((error) => {
     console.log(error);
     res.sendStatus(500);
   })
})

app.post('/api/products/id/styles', (req, res) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.body.product}/styles`,
    headers: token
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
 * These are the routes for Reviews APIs
 */

/**
 * These are the routes for Questions and Answers APIs
 */

const port = 3000;

app.listen(port, () => {
  console.log('You are listening on Port: 3000')
})