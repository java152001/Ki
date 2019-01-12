const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));


// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

module.exports = router;