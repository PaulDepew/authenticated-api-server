'use strict';

/**
 * Categories schema
 * @module categories-schema
 */

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  display_name: {type: String},
  description: {type: String},
});

module.exports = mongoose.model('category', categorySchema);