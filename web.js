var express = require('express');
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

buf = new Buffer(256);
fs.readFileSync('index.html');
buf.toString();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
