const http = require('http'); 

const server = http.Server(function(req,res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(3536, function(){
	console.log('listening on:3536');
});