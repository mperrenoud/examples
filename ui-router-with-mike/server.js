// Copyright (c) 2015 Consult with Mike, LLC | All rights reserved.
// Developer: Michael Perrenoud
// Website: http://consultwithmike.us

(function () {
  // this imports the express module
  var express = require('express');
  
  // this creates a new express application
  var app = express();
  
  // this creates a server to serve that express
  // application off of; this is the raw HTTP
  // part of the process
  var server = require('http').createServer(app);

  // because we are simply building an example
  // we just need to serve static files right from
  // this directory (e.g. index.html)
  app.use(express.static('./'));

  var port = 3000;
  console.log('Startup express on port %d...', port);

  // start up our server on port 3000 so it can start
  // receiving requests
  server.listen(port, function () {
    console.log("Express server listening on port %d", port);
  });
})();