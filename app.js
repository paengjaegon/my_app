var express = require('express');
var path = require('path');
var app = express();


app.set("view engine", 'ejs');

//app.use(express.static(__dirname+'/public'));
app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname);

var data={count:0};
app.get('/', function (req, res){
  res.render('my_first_ejs');
});
app.get('/reset', function(req,res){
  data.count=0;
  res.render('my_fist_ejs', data);
});

app.get('set/count', function(req,res){
  if(req.query.count) data.count=req.queyr.count;
  res.render('my_first_ejs', data);
});

app.get('set/:num', function(req, res){
  data.count=req.params.num;
  res.render('my_fist_ejs', data);
});

app.listen(3000, function(){
  console.log('Server On!');
});
