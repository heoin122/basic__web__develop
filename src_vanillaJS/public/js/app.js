var express = require('express')
var app = express()
var fs = require('fs');

app.get('/', function(req, res) {
	fs.readFile('../index.html', function(error, data) {
		if(error) {
			console.log(error)
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end(data);
		}
	})
})
/*app.login('/login', function(req, res) {
	res.send('<h1> please login</h1>')
})
*/
app.listen(80, function() {
	console.log('Connected 80 port!')
})
