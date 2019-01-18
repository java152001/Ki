const Comment = require("../models/comment");
const Article = require("../models/article");

// Defining methods for the CommentsController
module.exports = {
  findAll: function (req, res) {
    Comment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Comment
      .findOne({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {

    Comment
      .create(req.body)
      .then(function (dbModel) {
        Article.findOneAndUpdate({ _id: req.body.article._id },
          { $push: { comments: dbModel._id } }, { new: true })
          .then(function (finArticle) {
            res.json(finArticle)
          })
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.delete())
      .then(function (dbModel) {
        Article.findOneAndUpdate({ _id: dbModel.article },
          { $pull: { comments: dbModel._id } }, { new: true })
          .then(function (finArticle) {
            res.json(finArticle)
          })
      })
      .catch(err => res.status(422).json(err));
  }
};