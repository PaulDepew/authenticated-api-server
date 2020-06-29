'use strict';

/**
 * Timestamp Module
 * @module timestamp
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns {variable}
 */

module.exports = (request, response, next) => {
  let date = new Date(Date.now());
  request.requestTime = date;
  next();
};