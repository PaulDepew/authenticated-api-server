'use strict';


/**
 * Products class
 * @module products-collection
 */

const schema = require('./products-schema.js');
const Model = require('../mongo-model.js');

class Product extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Product;