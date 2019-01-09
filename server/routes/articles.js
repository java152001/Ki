var express = require('express');
var passport = require('passport');
var axios = require('axios');
var cheerio = require('cheerio');

var dbArticle = require('../models/article')

const router = new express.Router();


router.get("/scrape", function (req, res) { 
    axios.get("https://www.macrumors.com/search/?s=").then(function (response) {
        console.log(req.user);
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

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
            dbArticle.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    // If an error occurred, send it to the client
                    return res.json(err);
                });
        });
    });
});

module.exports = router;