var path = require("path");
var app = require("express")
var Article = require("../models/article")

module.exports = function(app){

  app.post("/api", function(req,res){
    var entry = new Article(req.body);

    entry.save(function(err, doc) {
      if (err) {
        console.log(err// Or log the doc
        );
      } else {
        console.log(doc);
      }
      res.json(doc)
    })
  })

  app.get("/api", function(req, res){
    Article.find({})
    .exec(function(err,doc){
      if (err){
        console.log(err);
      } else {
        res.send(doc);
      }
    })
  })

}
