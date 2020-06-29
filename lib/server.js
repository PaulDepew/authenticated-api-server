'use strict';

/** 
 * Simple Server Start
 * @module Server
 * @function start
 */


const express = require('express');
const app = express();
const router = require('../routes/router');



// Middleware Required
const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const fourOhFour = require('../middleware/404');
const fiveZeroZero = require('../middleware/500');
const authorizationRouter = require('../routes/authRoutes');
const testRouter = require('../routes/secret-routes');



// Middleware for all routes
app.use(express.json());
app.use(timestamp);
app.use(logger);


// App Routes
app.get('/', (req, res) => {
  res.send(`Hello Person! Welcome to my API! You can use the routes: <br> /signin: to sign in <br> /users: to request user info <br> /api/products: to retrieve products <br> /api/categories: to retrieve categories`);
});

app.use('/api', router);

app.use('/', authorizationRouter);
app.use('/', testRouter);




// Error Middleware
app.use('*', fourOhFour);
app.use(fiveZeroZero);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, ()=>{
      console.log(`server running on port:: ${port}`);
    });
  },
};
