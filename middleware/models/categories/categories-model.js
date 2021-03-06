'use strict';
/**
 * Categories class
 * @module categories-collection
 */

const schema = require('./categories-schema.js');
const Model = require('../mongo-model.js');

class Category extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Category;