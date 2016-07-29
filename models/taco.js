/*
Here is where you setup a model for how to interface with the database.
*/

// Require the O.R.M
// =================================================
var orm = require('../config/orm.js');

// Compiles the javascript client requests (i.e. C.R.U.D.) which are passed to their O.R.M. counterparts and then translated into SQL commands
// =================================================
var taco = {
	// Read method:
	all: function(cb) {
		orm.all('tacos', function(res){
			cb(res);
		});
	},
	// Create method:
	create: function(cols, vals, cb) {
		orm.create('tacos', cols, vals, function(res){
			cb(res);
		});
	},
	// Update method:
	update: function(objColVals, condition, cb) {
		orm.update('tacos', objColVals, condition, function(res){
			cb(res);
		});
	},
	// Delete method
	delete: function(condition, cb){
		orm.delete('tacos', condition, function(res){
			cb(res);
		});
	}
};

// Export the taco javascript to the tacos_controller.js
module.exports = taco;