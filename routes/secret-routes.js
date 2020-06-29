'use strict';


/**
 * Extra Routes module
 * @module secret-routes
 */

const express = require('express');
const router = express.Router();
const bearerMiddleware = require('../middleware/bearer.js');
const permissions = require('../middleware/authorize.js');
const UserModel = require('../middleware/models/users/users-model.js');
const User = new UserModel();

router.get('/secret', bearerMiddleware, (request, response) => {
  response.send(request.user);
});

router.get('/read', bearerMiddleware, permissions('read'), (request, response) => {
  response.send('Route /read success!');
});

router.post('/add', bearerMiddleware, permissions('create'), (request, response) => {
  response.send('Route /add success!');
});

router.put('/change', bearerMiddleware, permissions('update'), (request, response) => {
  response.send('Route /change success!');
});

router.delete('/remove', bearerMiddleware, permissions('delete'), (request, response) => {
  response.send('Route /remove success!');
});






module.exports=router;