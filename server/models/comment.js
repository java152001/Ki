var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  title: String,
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  }
});

var Comment = mongoose.model("Comment", NoteSchema);

module.exports = Comment;
