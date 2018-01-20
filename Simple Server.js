var http = require('http');

http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
	console.log("HEllo Called");
	
    res.end('Hello World KEC');
	//res.json({"bug":"test"});
//	res.setHeader('Content-Type', 'application/json');
//res.end(JSON.stringify({ a: 1 }));
	
}).listen(8082);