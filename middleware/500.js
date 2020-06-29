'use strict';

//Module that handles 500 errors (server errors)

/**
  * 500 error handler
  * @module 500
  * @param {*} request 
  * @param {*} response 
  * @returns {status}
  */

module.exports = (request, response) => {
  console.log('__ERROR!!__ :: 500');
  response.status(500).send('500 error: Ship is sinking!');
};
