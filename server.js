var http= require("http");
var url = require("url");

function start(route, handle) {

  function onRequest(request, response)  {
    var postData = "";

    var pathname=url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
    //response.writeHead(200, {"Contents-Type": "text/plain"});
  //  route(handle, pathname, response);
    //response.write(content);
    //response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has Started");

}

exports.start = start;
