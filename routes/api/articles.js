const router = require("express").Router();
const request = require("request");
const articlesController = require("../../controllers/articlesController");
const cheerio = require("cheerio");

//* Matches with "/api/articles/scraped"
router
  .route("/scraped")
    .get(
      //! NOT SURE HOW TO CHANGE FROM JQUERY
      request("https://www.nytimes.com/section/us", function(error, response, html) {
        let $ = cheerio.load(html);
        let results = [];
        $("div.story-body").each(function(i, element) {
          
          let title = $(element).children().children().children("h2.headline").text().trim();
          let summary = $(element).children().children().children("p.summary").text();
          let link = $(element).children().attr("href");
          results.push({
            title: title,
            summary: summary,
            link: link
          });      
          // console.log(results); 
        });
        res.json(results);
      })
    )


//* Matches with "/api/articles"
router
    .route("/")
      .post(articlesController.create)
      .get(articlesController.findAll);

//* Matches with "/api/articles/:id"
router
  .route("/:id")
    .get(articlesController.findById)
    .delete(articlesController.remove);
    
    // .put(articlesController.update)




module.exports = router;
