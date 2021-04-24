const  mysql = require('mysql');
const QUERY = "SELECT * FROM new_schema.libraries;"

var connection = mysql.createConnection({
    "host"     : "localhost",
    "user"     : "root",
    "password" : "root",
    "database" : "new_schema"
});
connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

connection.query(QUERY, function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(`${rows[i].OBJECTID}, ${rows[i]["Library Name"]}, 
        ${rows[i].Postcode},${rows[i]["Email Address"]},${rows[i].Telephone},${rows[i].Street}${rows[i].URL}`);
    }
});