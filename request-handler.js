/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
var url = require("url");

var handleRequest = function(request, response) {
  // get request URL.  get that URL's pathname
  // if pathname = "/1/classes/messages" {return messages}
  // else return str"You didn't ask for shit"

  var messagePath = url.parse(request.url).pathname;
  console.log("messagePath: ", messagePath);

  response.writeHead(200,{
    "Content-Type": "text/plain",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10
  });
  response.write("Testing handleRequest");
  response.end();
};

exports.handleRequest = handleRequest;