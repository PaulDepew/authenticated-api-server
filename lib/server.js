'use strict';

/** 
 * Simple Server Start
 * @module Server
 * @function start
 */

const express = require('express');
const app = express();


app.use(express.json());

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, ()=>{
      console.log(`server running on port:: ${port}`);
    });
  },
};
