'use strict';

/**
 * getModel
 * @module getModel
  * @param request
  * @param response
  * @param next
  * @function getModel
  * @returns {object}
  */

const CategoryModel = require('../middleware/models/categories/categories-model.js');
const ProductModel = require('../middleware/models/products/products-model.js');

function getModel(request, response, next){
  let model = request.params.model;

  switch (model) {
  case 'products':
    request.model = new ProductModel();
    next();
    break;
  case 'categories':
    request.model = new CategoryModel();
    next();
    break;
  default:
    next('Invalid Model');
    break;   
  }

}

module.exports = getModel;
