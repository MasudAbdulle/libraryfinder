//const { response } = require("express");
const { request } = require("express");
var express = require("express");
const mysql = require('mysql');
const conf = require('./conf.json');



const QUERY = "SELECT * FROM new_schema.libraries;"

const QUERY2 = "SELECT * FROM `new_schema.libraries` WHERE Postcode LIKE = ?";

var app = express();
app.set("view engine", "ejs");
app.use(express.static("static"));





app.get("/search.html", function (request, response) {
    connection.query(QUERY2, ["%"+request.query.search+"%"], function (err, rows, fields) {
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

var connection = mysql.createConnection(conf.db);

connection.connect(function (err) {
    if (err) {
        console.error("Connection error: ", err.message);
    } else {
        console.log("Connected as: ", connection.threadId);
    }
});


app.listen(conf.port);
console.log("server running on https://locoalhost:%s", conf.port);

