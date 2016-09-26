const express = require('express')
const path = require('path')
const port = 9003
const app = express()

// serve static assets normally
  app.use(express.static(__dirname))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
	var options = {root: __dirname};
  response.sendFile('index.html',options,function(error){
  	 if (error){
  	 	console.log(error);
  	 }
  })
})

app.listen(port)
console.log("server started on port " + port)