const Comment = require("mongoose").model('Comment');
const Article = require("mongoose").model('Article');

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
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    Comment
      .create(req.body)
      .then(function (dbModel) {
        Article.findOneAndUpdate({ _id: req.body.article },
          { $push: { comments: dbModel._id } },
          { new: true }).then(function (finArticle) {
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
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
