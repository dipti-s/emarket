var express = require('express'), app = express(),
 	port = 8080 , router = express.Router();

    router.get('/', function(req, res) {
     var options = {
    root: __dirname + '/app',
	 }
     var fileName = "index.html";
	  if(fileName){
				res.sendFile(fileName, options, function (err) {
				if (err) {
				console.log(err);
				res.status(err.status).end();
				}
				else {
				console.log('Sent:', fileName);
				}
			});
	  }
    });
    
	router.get('/bundle.js', function(req, res) {
     var options = {
    root: __dirname + '/public/dist/',
	 }
     var fileName = 'bundle.js';
	  if(fileName){
				res.sendFile(fileName, options, function (err) {
				if (err) {
				console.log(err);
				res.status(err.status).end();
				}
				else {
				console.log('Sent:', fileName);
				}
			});
	  }
	});


//set up the router
app.use('/', router);
app.listen(port);
console.log('server started on ' + port);


