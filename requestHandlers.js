var querystring = require("querystring");
var exec = require("child_process").exec;

function start(response,postData) {
  console.log("Request handler 'start' was called");

/*
  function sleep(milliSeconds){
    var starTime = new Date().getTime();
    while(new Date().getTime() < starTime + milliSeconds);
  }
*/
  var content = "empty";
  /*
  exec("ls -lah", function(error, stdout, stderr){
    response.writeHead(200, {"Contents-Type": "text/plain"});
    content = stdout;
    response.write(content);
    response.end();
  });*/

  /*exec("find /", { timeout: 10000, maxBuffer:20000*1024},
        function(error, stdout, stderr) {
          response.writeHead(200, {"Contents-Type": "text/plain"});
          response.write(stdout);
          response.end();
        });*/
        var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

}

function upload(response,postData){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("Hello Upload");
  response.write("You've sent the text: "+
  querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
