require('./polyfill');

var express = require('express');
var app = new express();
var parser = require('body-parser');

app.get('/', rootGet)
  .use(express.static(__dirname + '/../.tmp'))
  .listen(7777);

function rootGet(req, res) {
  res.render('../app/index.ejs', {});
}

app.use(parser.json());
app.use(parser.urlencoded({
  extended: false
}));

require('./routes/items')(app);