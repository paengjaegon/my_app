function route(handle, pathname, response,postData) {
  console.log("About to route a request for " + pathname);
  if(typeof handle[pathname] === 'function') {
    //return handle[pathname]();
    handle[pathname](response,postData);
  }else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Contents-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
    //return "404 Not Found ";
  }
}

exports.route = route;
