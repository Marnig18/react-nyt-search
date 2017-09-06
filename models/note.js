// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({

	body:{
		type: String,
		required: true
	},

	created: {
		type: Date,
		default: Date.Now
	}

})

// Create the Model
var Note = mongoose.model("Note", NoteSchema);

// Export it for use elsewhere
module.exports = Note;
