//const { response } = require("express");
const { request } = require("express");
var express = require("express");
const mysql = require('mysql');
const conf = require('./conf.json');
process.env.NODE_ENV= process.env.NODE_ENV ||'dev';


const QUERY = "SELECT * FROM new_schema.libraries;"

const QUERY1 = "SELECT * FROM `libraries` WHERE POSTCODE LIKE ?";



var app = express();
app.set("view engine", "ejs");
app.use(express.static("static"));





app.get("/search.html", function (request, response) {
    connection.query(QUERY1, ["%"+request.query.search+"%"], function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("search", { 'rows': rows });
        }
    });
});







    function splash(request, response) {
        if(typeof request.query.Postcode == "undefined"){
        connection.query(QUERY, function (err, rows, fields) {
            if (err) throw err;
            response.render("index", { 'rows': rows });
        });

    }
  
}



app.get("/map.html", function (request, response) {
    var lat = request.query.lat, lon = request.query.lon;
    connection.query(QUERY, function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("map", { 'lat':lat, 'lon':lon, 'rows': rows });
        }
    });
});


    
app.get("/", splash);
app.get("/index.html", splash);
app.get("/search.html", splash);

var connection = mysql.createConnection(conf[process.env.NODE_ENV].db);

connection.connect(function (err) {
    if (err) {
        console.error("Connection error: ", err.message);
    } else {
        console.log("Connected as: ", connection.threadId);
    }
});

if (process.env.NODE_ENV!='test'){
app.listen(conf[process.env.NODE_ENV].port);
console.log("server running on https://locoalhost:%s", conf[process.env.NODE_ENV].port);
}

exports.app = app;
exports.connnection = connection;