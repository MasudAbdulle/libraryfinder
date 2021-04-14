//const { response } = require("express");
var express = require("express");
const PORT = 8080;

var app = express();
app.set("view engine","ejs");
app.use(express.static("static"));


app.get("/index.html", function(request,response){
response.render("index", request.query)});

app.get("/map.html", function(request,response){
    response.render("map")});
    
    
    app.get("/libraryq.html", function(request,response){
        response.render("libraryq")});    

        app.get("/libraryw.html", function(request,response){
            response.render("libraryw")});    

            app.get("/libraryx.html", function(request,response){
                response.render("libraryx")});  

                app.get("/libraryy.html", function(request,response){
                    response.render("libraryy")}); 
                    
                    app.get("/libraryz.html", function(request,response){
                        response.render("libraryz")});    
                
            

app.get("/goodbye", function(request,response){
    response.send("<html><body>goodbye, world</body></html>")});

app.listen(PORT);
console.log("server running on https://locoalhost:%s",PORT);