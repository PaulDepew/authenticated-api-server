'use strict';

/**
  * 404 error handler
  * @module 404
  * @param {*} request 
  * @param {*} response 
  * @returns {status}
  */



module.exports = (request, response) => {
  console.log('__ERROR!!__ :: '+ request.path + ' not found');
  response.status(404).send('Cannot ' + request.method + ' ' + request.path);
};