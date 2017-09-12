// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

	title:{
		type: String,
		required: true
	},

	link:{
		type: String,
		required: true
	},

	date:{
		type: Date,
		required: true
	},

	image:{
		type: String,
	},

		note:[{
		type: Schema.Types.ObjectId,
		ref: "Note"
	}]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
