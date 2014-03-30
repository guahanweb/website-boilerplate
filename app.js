var config = require('./config/server.json');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(config.PORT);
console.log('Listening on port', config.PORT);
