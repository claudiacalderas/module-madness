
var http = require('http');
var balance = require('./modules/accountBalance.js');

http.createServer(function(request,response){
  response.writeHead(200);
  response.write(balance.balanceText + balance.balanceAmount() + '\n');
  response.end();
}).listen(8000);

// we are specifying a connection port for our connection
console.log("Module Madness: listening..");
