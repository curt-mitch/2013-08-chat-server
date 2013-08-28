/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
 // importing module.export objects
var url = require("url");
var storage = require("./storage.js");

//request handler to handle HTTP request from Chat Client

var handleRequest = function(request, response) {
  // get request URL.  get that URL's pathname
  // if pathname = "/1/classes/messages" {return messages}
  // else return str"You didn't ask for shit"

  var messagePath = url.parse(request.url).pathname;
  //console.log("messagePath: ", messagePath);

  var responseHeaders = {
    "Content-Type": "text/plain, application/json",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, contentType, accept",
    "access-control-max-age": 10
  };

  if (messagePath === "/1/classes/messages"){
    if (request.method === "OPTIONS"){
      response.writeHead(200, responseHeaders);
      response.end('');
    }

    if(request.method == "POST") {
      request.on('data', function(data){
        var body = '' + data;
        var newMessages = JSON.parse(body);
        storage.messages.push(newMessages);
      });
      response.writeHead(201, responseHeaders);
      var resp = JSON.stringify(storage.messages);
      response.end(resp);
    }

    if(request.method == "GET"){ 
      response.writeHead(200, {
        'Content-Type': 'application/json',
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
        "access-control-allow-headers": "content-type, contentType, accept",
        "access-control-max-age": 10,
        'data': storage.messages
      });
      var resp = JSON.stringify(storage.messages);
      response.end(resp);
    }

  } else {
    response.writeHead(404);
    response.write("Y U NO ASK 4 ANYTHING USEFUL???");
    response.end();
  }
};

exports.handleRequest = handleRequest;




















