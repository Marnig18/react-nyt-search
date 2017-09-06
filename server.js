// Include Server Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")

//Require Models
var Article = require("./models/article")
var Note = require("./models/note")


var app = express();

app.use(express.static("build"));

var PORT = process.env.PORT || 3001;

mongoose.Promise = Promise;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("build"));

mongoose.connect("mongodb://localhost/nyt-Articles");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Starting our express server
require("./controller/api-routes")(app)

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/build/static/index.html");
});
