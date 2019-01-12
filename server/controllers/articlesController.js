const Comment = require("mongoose").model('Comment');
const Article = require("mongoose").model('Article');
// Defining methods for the ArticlesController
module.exports = {
    findAll: function(req, res) {
      Article
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      Article
        .findOne({ _id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      Article
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(function (dbModel) {
          Comment.deleteMany({ article: dbModel._id })
          .then(dbModel => res.json(dbModel))
        })
        .catch(err => res.status(422).json(err));
    }
  };