var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(bodyParser.json());


var http = require('http');
var url = require('url');


app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var jsonParser = bodyParser.json()

app.post('/myaction', jsonParser, function(req, res) {
	
	
	var qdata = req.body;
	
	var oper = req.body.oper;
	var op1 = req.body.op1;
	var op2 = req.body.op2;
	
	var result;
	
	switch (oper) {
  		case '+':
    		result = Number(op1) + Number(op2);
    		break;
		case '-':
    		result = op1 - op2;
    		break;
    	case '*':
    		result = op1 * op2;
    		break;
    	case '/':
    		result = op1 / op2;
    		break;
    	case '=':
    		result = op1;
    		break;
    }
  res.send({"result" : result});
});

app.listen(3010, function() {
  console.log('Server running at http://127.0.0.1:3010/');
});