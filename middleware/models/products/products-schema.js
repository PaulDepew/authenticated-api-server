'use strict';

/**
 * Products schema
 * @module products-schema
 */

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  display_name: {type: String},
  description: {type: String},
});

module.exports = mongoose.model('product', productSchema);