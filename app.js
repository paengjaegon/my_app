var express = require('express');
var path = require('path');
var app = express();


//app.use(express.static(__dirname+'/public'));
app.use(express.static(path.join(__dirname, 'public')));

//console.log(__dirname);

app.listen(3000, function(){
  console.log('Server On!');
});
