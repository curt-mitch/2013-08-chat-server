/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
var url = require("url");
var storage = require("./storage.js");

var handleRequest = function(request, response) {
  // get request URL.  get that URL's pathname
  // if pathname = "/1/classes/messages" {return messages}
  // else return str"You didn't ask for shit"

  var messagePath = url.parse(request.url).pathname;
  //console.log("messagePath: ", messagePath);

  if (messagePath === "/1/classes/messages"){
    if (request.method === "OPTIONS"){
      response.writeHead(200, {
        "Content-Type": "text/plain",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
        "access-control-allow-headers": "content-type, accept",
        "access-control-max-age": 10
      });
      response.end();
    } else if(request.method === "POST") {
      storage.messages.push(); //what do we pass into this?
      response.writeHead(200);

      response.end();
    } else if(request.method === "GET") {
      var jsonMessages = JSON.stringify(storage.messages);
      response.writeHead(200,{
        'Content-Type': 'application/json',
        'data': jsonMessages
      });
      response.end();
    }

  } else {
    response.writeHead(404);
    response.write("Y U NO ASK 4 ANYTHING USEFUL???");
  }

  response.end();
};

exports.handleRequest = handleRequest;