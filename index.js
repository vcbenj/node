const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '\'public'));

app.set('views', __dirname + '\views');
app.set('view engine', 'ejs');

// views is directory for all template files
app.get("/", function(req, res) {
	console.log("Received a request for /");

	res.write("This is the root.");
	res.end();
});


app.get('/getRate', function(req, res) {
  res.render('results');
});

app.listen(port, function() {
  console.log('Node app is running on port', port);
});

