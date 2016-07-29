// Requirements
// =================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Serve static content for the app from the "public" directory
// =================================================
app.use(express.static(process.cwd() + '/public'));

// Use Body Parser with Express middleware
// =================================================
app.use(bodyParser.urlencoded({
	extended: false
}))

// Method Override allows for deletion of info from the db
// =================================================
app.use(methodOverride('_method'))

// Set up handlebars
// =================================================
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Route to the controller
// =================================================
var routes = require('./controllers/tacos_controller.js');
app.use('/', routes);

// Start the server listening
// =================================================
var port = process.env.PORT || 3000;
app.listen(port);