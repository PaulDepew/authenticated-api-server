'use strict';


/**
 * Authorization module
 * @module authorization
 */


const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/basic.js');
const bearerMiddleware = require('../middleware/bearer.js');
const UserModel = require('../middleware/models/users/users-model.js');
const User = new UserModel();

router.post('/signup', signUp);
router.post('/signin', basicAuth, signIn);
router.get('/users', bearerMiddleware, getUsers);

/**
 * signUp - adds a user 
 * @function signUp
 * @param {*} request 
 * @param {*} response 
 * @returns {string} 
 */

async function signUp(request, response){
    
  let userExists = await User.exists({ username: request.body.username});
  if (userExists){
    response.send('user already exists');
    return;
  }
  let password = await UserModel.hashPass(request.body.password);
  let newUser = await User.create({ username: request.body.username, password: password, role: request.body.role});
  if (newUser){
    let token = await UserModel.generateToken({ username: request.body.username});
    response.cookie('token', token);
    response.header('token', token);
    response.send(token);
  }else {
    response.status(403).send('invalid user');
  }
}

/**
 * signIn - signs a user into the app 
 * @function signIn
 * @param {*} request 
 * @param {*} response 
 * @returns {(string|object)}
 */

async function signIn(request, response){
  if (request.user) {
    let token = await UserModel.generateToken({ username: request.user.username});
    response.cookie('token', token);
    response.header('token', token);
    response.send({token, user: request.user});
  } else {
    response.status(403).send('Invalid');
  }
}

/**
 * getUsers - gets all users that have signed up 
 * @function getUsers
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */

async function getUsers(request, response){
  let userQuery = await User.get();
  response.send(userQuery);
}


module.exports = router;