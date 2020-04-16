'use strict';

var http = require('http');

var port = (process.env.PORT || 3000);

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type':'application/json'});
  res.write(JSON.stringify({name:'Davidbot',ver:'1.0.0'}));
  res.end();
});

server.listen(port, ()=>{
  console.log('Server on port');
  console.log(port);
})