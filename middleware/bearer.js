'use strict';

/**
 * Bearer authorization
 * @module bearer
  * @param request
  * @param response
  * @param next
  * @function bearer
  * @returns {object}
  */

const UserModel = require('../middleware/models/users/users-model.js');

async function bearer(request, response, next){

  if (!request.headers.authorization) {
    response.status(401).send('No authorization headers');
  }

  let [authType, token] = request.headers.authorization.split(' ');

  let validUser = await UserModel.validateToken(token);

  if (validUser) {
    request.user = validUser;
    next();
  } else {
    next('Invalid Token');
  }
}

module.exports = bearer;