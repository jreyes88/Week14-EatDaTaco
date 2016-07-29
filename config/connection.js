// Require MySQL
// =================================================
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'avcmo8sa6ne6m7lc',
    password: 'mnnrlyt4qu0gvdf8',
    database: 'h3g7xh6s1jy675al'
});

// Connect to the Database
// =================================================
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export this connection (this is used by the O.R.M)
// =================================================
module.exports = connection;