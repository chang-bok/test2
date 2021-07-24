var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views_file');
app.set('view engine', 'jade');
app.locals.pretty = true;

app.listen(3000, function(){
  console.log('Connected, 3000 port!');
})

app.get('/topic/new', function(req, res){
  res.render('new');
});

app.post('/topic', function(req, res){
  var title = req.body.title;                       // 파일이름
  var description = req.body.description;    // 내용
  fs.writeFile('./dataa/'+title, description, function(err) {
     if(err) {
       console.log(err);
       res.status(500).send('Err....');
     }
    res.send('sucess');
  }); 
});