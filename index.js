#!/usr/bin/env node

const request = require('request');
request('https://api.kanye.rest', function (error, response, body) {
  
  console.log(JSON.parse(body).quote); 
});