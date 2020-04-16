'use strict';

var http = require('http');

var port = (process.env.PORT || 3000);

require('./davidbot')();

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type':'application/json'});
  res.write(JSON.stringify({name:'Davidbot',ver:'0.0.1'}));
  res.end();
});

server.listen(port, ()=>{
  console.log('Server on port');
  console.log(port);
})