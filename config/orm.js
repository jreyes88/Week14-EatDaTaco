// Require the connection.js module
// =================================================
var connection = require('../config/connection.js');

// When the client submits a request and a question mark is needed in the SQL command, this will input those question marks. Example: INSERT * WHERE ?
// =================================================
function printQuestionMarks(num){
    var arr = [];

    for (var i=0; i<num; i++){
        arr.push('?')
        console.log(num);
    }

    return arr.toString();
};

// Translates client requests to be like "WHERE name ? =" and inputs that equal sign
// =================================================
function objToSql(ob){
    //column1=value, column2=value2,...
    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

// More SQL O.R.M magic throughout here. Includes the Read, Create, Update, and Delete methods
// =================================================
var orm = {
    // Read method:
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Create method:
    create: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        console.log("Cols: " + cols)

        queryString = queryString + ' (';
        queryString = queryString + cols.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ') ';

        console.log(queryString)

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // Update method:
    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        console.log(queryString)
        connection.query(queryString, function(err, result) {
        if (err) throw err;
            cb(result);
        });
    },
    // Delete method
    delete: function(table, condition, cb){
        var queryString = 'DELETE FROM ' + table;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the O.R.M.
module.exports = orm;