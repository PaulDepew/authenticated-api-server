'use strict';

/**
 * Entry point into our server
 * @module Index 
 * @returns "Proof of Life"
 */

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server.js');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('open', ()=> {
  console.log('Mongo Connected!');
});

server.start(PORT);