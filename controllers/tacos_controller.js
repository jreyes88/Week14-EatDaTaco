// Requirements. Express is used for routing. Taco requires the logic in the taco.js.
// =================================================
var express = require('express');
var router = express.Router();
var taco = require('../models/taco.js');

// Route for the root
// =================================================
router.get('/', function(req,res) {
	res.redirect('/tacos')
});

// Route for showing all the tacos
// =================================================
router.get('/tacos', function(req,res) {
	taco.all(function(data){
		var hbsObject = {tacos : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

// Route for posting new tacos to the db and the page
// =================================================
router.post('/tacos/create', function(req,res) {
	taco.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/tacos')
	});
});

// Route for updating tacos to either be on the plate or be devoured
// =================================================
router.put('/tacos/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	taco.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/tacos');
	});
});

// Route for deleting tacos from the page/db altogether
// =================================================
router.delete('/tacos/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	taco.delete(condition, function(data){
		res.redirect('/tacos');
	});
});

// Export the routing
// =================================================
module.exports = router;