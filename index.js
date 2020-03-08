const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getRate', CalcFunction);

app.listen(port, function() {
  console.log('Node app is running on port', port);
});




	response.render('results', params);
