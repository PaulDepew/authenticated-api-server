'use strict';

/**
  * Basic Authorization
  * @module basicAuth
  * @param request
  * @param response
  * @param next
  * @function basicAuth
  * @returns {object}
  */

const base64 = require('base-64');

const UserModel = require('../middleware/models/users/users-model.js');

// Authentication, class example
async function basicAuth(request, response, next) {
  

  // strings from our auth header
  let [authtype, authString] = request.headers.authorization.split(' ');
  let [username, password] = await base64.decode(authString).split(':');

  let user = await UserModel.authenticateUser(username, password);

  if (user) {
    request.user = user;
    next();
  } else {
    next('Invalid login');
  }

  return 0;
}

module.exports = basicAuth;