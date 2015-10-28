var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(express.static(process.cwd() + '/html'));
app.use(bodyParser.json());
app.all("/test",function(req,res){
	console.log(req.body);
	res.end();
});
var port = 1337;
http.listen(port,function(){ console.log('listening on port ' + port);});

