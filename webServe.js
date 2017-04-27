var http = require('http');
const PORT = 8080;

function process_request(req, res) {
  var body = 'Thanks for calling!\n';
  var content_length = body.length;
  res.writeHead(200, {
    'Content_Length': content_length,
    'Content_Type': 'text/plain'
  });
