var server = require('express')();
var http = require('http').Server(server);

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

server.get('/', function(request, response){
  response.send('Hello world')
});

server.get('/2', function(request, response){
  response.send('page2baby')
});

server.get('/page3', function(request, response){
  response.render('index');
});

http.listen(3000, function(){
  console.log('listening on port 3000')
});
