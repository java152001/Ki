var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
    // required: true
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article"
    // required: true
  }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
