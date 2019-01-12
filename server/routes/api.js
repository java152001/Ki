const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

var dbArticle = require('../models/article');

const router = new express.Router();

router.get('/dashboard', (req, res) => {

  axios.get("https://www.macrumors.com/search/?s=" + req.user.phone).then(function (response) {
        console.log("req.user");
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("div.article.search").each(function (i, element) {
            // Save an empty result object
            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .children("div.searchtitle")
                .children("a")
                .text();
            result.link = $(this)
                .children("div.searchtitle")
                .children("a")
                .attr("href");

            // Create a new Article using the `result` object built from scraping
            dbArticle.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    if(dbArticle) {
                    console.log(dbArticle);
                    console.log("Something")
                    }
                })
                .catch(function (err) {
                    // If an error occurred, send it to the client
                    return res.json(err);
                });
        });
    });
    


  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });

  
});

router.get('/articles', (req, res) => {
    dbArticle.find({})
    .then(function(dbArticle) {
        res.json(dbArticle)
        console.log("API DB Article")
    })
});

module.exports = router;
