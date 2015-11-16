var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var fs = require("fs");
app.use(express.static(process.cwd() + '/html'));
app.use(bodyParser.json());
app.all("/test",function(req,res){
	if(!existingRepos.hasOwnProperty(req.body.repository.id)){
		existingRepos[req.body.repository.id] = req.body.repository;
		fs.writeFile("repos.json",JSON.stringify(existingRepos));
	}
	console.log(req.body.repository);
	res.end();
});

var existingRepos = JSON.parse(fs.readFileSync("repos.json"));

var port = 1337;
http.listen(port,function(){ console.log('listening on port ' + port);});

