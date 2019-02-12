var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    {"id":1, "firstName":"Bob", "LastName":"Smith", "email":"bob@gmail.com"},
    {"id":2, "firstName":"Tammy", "LastName":"Norton", "email":"tnorton@gmail.com"},
    {"id":3, "firstName":"Tina", "LastName":"Lee", "email":"lee.tina@gmail.com"},
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }

});
