const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cheerio = require("cheerio");
var Article = require("mongoose").model('Article');

// Use morgan logger for logging requests
router.use(logger("dev"));
// Use body-parser for handling form submissions
router.use(bodyParser.urlencoded({ extended: true }));

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"

router.get("/scrape", function (req, res) {
  // First, we grab the body of the html with request
  axios.get("http://www.echojs.com/").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    console.log(response)
    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Article using the `result` object built from scraping
      Article.create(result)
        .then(function (dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });
    res.send("Scrape Complete");
    // If we were able to successfully scrape and save an Article, send a message to the client
  });
});

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;