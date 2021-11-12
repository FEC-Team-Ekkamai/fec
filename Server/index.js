const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config.js')
const app = express();
//const api =require('./token');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/**
 * These are the routes for Product APIs
 */

const options = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
  headers: api
}

app.get('/api/products', (req, res) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
    headers: api
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
    headers: api
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
});

app.post('/api/products/id/styles', (req, res) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.body.product}/styles`,
    headers: api
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
 app.get('/api/reviews', (req, res) => {
  var id = req.query.product_id;
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
    headers: api,
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
    headers: api,
    params: {product_id: id}
  };
  axios(options)
   .then((response) => {
     res.send(response.data);
   })
   .catch((error) => {
     res.sendStatus(500);
   });
});

app.put(`/api/reviews/:review_id/helpful`, (req, res) => {
  var reviewId = req.params.review_id;

  const options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`,
    headers: api,
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
    headers: api,
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

app.post('/api/reviews', (req, res) => {
  console.log(req.body)
  var params = req.body;
  const options = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
    headers: api,
    data: params
    }
  axios(options)
   .then((response) => {
     res.send(response.data);
   })
   .catch((error) => {
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
    headers: api
  };
  axios(questionOptions)
    .then(questions => {
      res.send(questions.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post('/api/products/questions', (req, res) => {
  let questionOptions = {
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
    headers: api,
    data: req.body
  };
  axios(questionOptions)
    .then(results => {
      res.send(results.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});


const port = 3000;

app.listen(port, () => {
  console.log('You are listening on Port: 3000')
});