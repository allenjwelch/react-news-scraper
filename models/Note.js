let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
let NoteSchema = new Schema({
  title: String,
  body: String
});

let Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;